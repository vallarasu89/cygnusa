/**
 * CYGNUSA Technologies - Enterprise Smooth Section Scroller
 * Accurately scrolls to target hash sections accounting for:
 * 1. Fixed sticky header offset (90px)
 * 2. Cross-route transitions and DOM mounting delay
 * 3. Asynchronous image loading and layout shifts
 * 4. Multi-frame retry to guarantee landing on the exact section
 */

export function scrollToTargetElement(targetIdOrHash: string, smooth: boolean = true): boolean {
  if (!targetIdOrHash) return false;
  
  const id = targetIdOrHash.replace(/^#/, '').trim();
  if (!id) return false;

  const getElement = (): HTMLElement | null => {
    return (
      document.getElementById(id) ||
      document.getElementById(id.toLowerCase()) ||
      document.getElementById(`section-${id}`) ||
      document.querySelector<HTMLElement>(`[name="${id}"]`) ||
      document.querySelector<HTMLElement>(`[data-section="${id}"]`)
    );
  };

  const headerOffset = 90; // Fixed navbar height allowance

  const executeScroll = () => {
    const el = getElement();
    if (!el) return false;

    // Use native scrollIntoView with scroll-margin-top or fallback to manual offset
    if ('scrollMarginTop' in el.style || getComputedStyle(el).scrollMarginTop !== '0px') {
      el.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start',
      });
    } else {
      const rect = el.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top - headerOffset;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: smooth ? 'smooth' : 'auto',
      });
    }
    return true;
  };

  // Immediate attempt
  const foundNow = executeScroll();

  // Multi-stage retry: catches layout shifts as images, fonts, and 3D canvases settle
  const delays = [50, 150, 350, 700, 1100];
  delays.forEach((delay) => {
    setTimeout(() => {
      executeScroll();
    }, delay);
  });

  return foundNow;
}

export function handleSectionLinkNavigation(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void
) {
  if (onNavigate) {
    onNavigate();
  }

  if (!href.includes('#')) {
    return;
  }

  const [targetPath, targetHash] = href.split('#');
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const normalizedTargetPath = targetPath.replace(/\/$/, '') || '/';

  // If already on the same page or referencing an in-page anchor
  if (targetPath === '' || currentPath === normalizedTargetPath) {
    e.preventDefault();
    scrollToTargetElement(targetHash, true);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', href);
    }
  }
}

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { Lanyard } from '@/components/common/Lanyard';
import {
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface OfficeMember {
  id: string;
  name: string;
  role: string;
  department: string;
  empId: string;
  avatarUrl: string;
  experience: string;
  location: string;
  bio: string;
  specialties: string[];
}

export const OFFICE_MEMBERS: OfficeMember[] = [
  {
    id: 'muthuraman',
    name: 'Muthuraman R',
    role: 'Founder & Managing Director',
    department: 'Executive Leadership',
    empId: 'CYG-001',
    avatarUrl: '/team/muthuraman-r.jpg',
    experience: '25+ Years in Enterprise Tech',
    location: 'Chennai HQ',
    bio: 'Founder and executive leader of CYGNUSA Technologies with over 25+ years guiding enterprise IT service delivery, strategic technology advisory, and digital transformations across Asia-Pacific and North America.',
    specialties: ['Enterprise IT Strategy', 'Global Delivery Leadership', 'Advise-Build-Run Model'],
  },
  {
    id: 'sathish',
    name: 'Sathish Kumar',
    role: 'Chief Technology Officer',
    department: 'Virtual CTO & Advisory',
    empId: 'CYG-002',
    avatarUrl: '/team/sathish.jpg',
    experience: '18+ Years Architecture Leadership',
    location: 'Chennai HQ',
    bio: 'Heads CYGNUSA Virtual CTO practice. Deep expert in resilient multi-cloud architectures across AWS, Azure, and GCP, enterprise FinOps cost governance, and zero-downtime migrations.',
    specialties: ['Virtual CTO Advisory', 'Multi-Cloud Architecture', 'FinOps Governance'],
  },
  {
    id: 'priya',
    name: 'Priya Sundaram',
    role: 'VP of Cybersecurity & Compliance',
    department: 'Information Security',
    empId: 'CYG-007',
    avatarUrl: '/team/priya.jpg',
    experience: '14+ Years in Cyber Defense',
    location: 'Chennai HQ',
    bio: 'Certified ISO 27001 Lead Auditor & CISSP. Architect of CYGNUSA Zero-Trust enterprise cyber defense frameworks, continuous penetration testing, and regulatory compliance.',
    specialties: ['ISO 27001:2022 ISMS', 'Zero-Trust Architecture', 'Managed EDR / SOC'],
  },
  {
    id: 'vallarasu',
    name: 'Vallarasu K',
    role: 'Head of Product Engineering',
    department: 'Software Engineering',
    empId: 'CYG-012',
    avatarUrl: '/team/vallarasu.jpg',
    experience: '10+ Years Full-Stack Systems',
    location: 'Chennai HQ',
    bio: 'Spearheads CYGNUSA enterprise application development, modular microservices platforms, and high-concurrency cloud-native SaaS delivery with automated CI/CD pipelines.',
    specialties: ['Distributed Systems', 'TypeScript Microservices', 'CI/CD Cloud Automation'],
  },
  {
    id: 'divya',
    name: 'Divya R',
    role: 'Lead AI Solutions Architect',
    department: 'AI & Research Division',
    empId: 'CYG-019',
    avatarUrl: '/team/divya.jpg',
    experience: '8+ Years Applied AI / ML',
    location: 'IIT Guwahati R&D Hub',
    bio: 'Leads our academic and applied AI research laboratory in the IIT Guwahati campus. Specializes in enterprise private RAG knowledge engines, document OCR automation, and model safety.',
    specialties: ['Private Enterprise RAG', 'Automated Document OCR', 'Model Safety & Alignment'],
  },
  {
    id: 'karthik',
    name: 'Karthik Narayanan',
    role: 'Lead Cloud & DevOps Architect',
    department: 'Cloud & Infrastructure',
    empId: 'CYG-024',
    avatarUrl: '/team/karthik.jpg',
    experience: '11+ Years Cloud Platforms',
    location: 'Chennai HQ',
    bio: 'Specializes in Kubernetes container orchestration, Infrastructure-as-Code with Terraform, and hybrid cloud disaster recovery with verified RTO/RPO failovers.',
    specialties: ['Kubernetes & Docker', 'Terraform IaC', 'Disaster Recovery Automation'],
  },
  {
    id: 'ananya',
    name: 'Ananya Sen',
    role: 'Enterprise Solutions & Delivery Lead',
    department: 'Software Engineering',
    empId: 'CYG-031',
    avatarUrl: '/team/ananya.jpg',
    experience: '9+ Years Agile Delivery',
    location: 'Chennai HQ',
    bio: 'Oversees multi-sprint software development cycles, client stakeholder governance, and verified UAT handoffs for enterprise portal solutions and ERP integrations.',
    specialties: ['Agile Sprint Governance', 'Enterprise ERP Systems', 'Client Stakeholder Management'],
  },
];

/**
 * Creates high-resolution canvas texture for the 3D Lanyard front face.
 * Matches the authentic physical Smart ID Card design.
 */
function createCardFrontDataUrl(member: OfficeMember, avatarImg?: HTMLImageElement): string {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background - Clean White Card with soft gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 640, 920);
  bgGrad.addColorStop(0, '#ffffff');
  bgGrad.addColorStop(0.85, '#f8fafc');
  bgGrad.addColorStop(1, '#f1f5f9');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 640, 920);

  // Micro guilloche waves
  ctx.strokeStyle = 'rgba(14, 165, 233, 0.04)';
  ctx.lineWidth = 1;
  for (let y = 60; y < 880; y += 22) {
    ctx.beginPath();
    ctx.moveTo(30, y);
    ctx.bezierCurveTo(200, y - 8, 440, y + 8, 610, y);
    ctx.stroke();
  }

  // Top Accent Banner - Cygnusa Sky
  const topGrad = ctx.createLinearGradient(0, 0, 640, 0);
  topGrad.addColorStop(0, '#0284c7');
  topGrad.addColorStop(0.5, '#0ea5e9');
  topGrad.addColorStop(1, '#38bdf8');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, 640, 36);

  // Top Header Area: CYGNUSA Branding
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CYGNUSA', 320, 95);

  ctx.fillStyle = '#0ea5e9';
  ctx.font = '600 13px sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('TECHNOLOGIES', 320, 118);

  // Contactless RFID Wave Symbol on top right
  ctx.strokeStyle = '#0ea5e9';
  ctx.lineWidth = 2.5;
  const rx = 560, ry = 100;
  ctx.beginPath(); ctx.arc(rx, ry, 6, -Math.PI / 3, Math.PI / 3); ctx.stroke();
  ctx.beginPath(); ctx.arc(rx, ry, 12, -Math.PI / 3, Math.PI / 3); ctx.stroke();
  ctx.beginPath(); ctx.arc(rx, ry, 18, -Math.PI / 3, Math.PI / 3); ctx.stroke();

  // Photo Frame (220 x 220)
  const px = 210, py = 160, pw = 220, ph = 220, pr = 16;

  ctx.save();
  ctx.shadowColor = 'rgba(14, 165, 233, 0.25)';
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 6;
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(px, py, pw, ph, pr);
  ctx.fill();
  ctx.restore();

  if (avatarImg && avatarImg.complete && avatarImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(px, py, pw, ph, pr);
    ctx.clip();
    ctx.drawImage(avatarImg, px, py, pw, ph);
    ctx.restore();
  } else {
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(px, py, pw, ph, pr);
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 72px sans-serif';
    ctx.textAlign = 'center';
    const initials = member.name.split(' ').map((n) => n[0]).join('').slice(0, 2);
    ctx.fillText(initials, 320, 290);
  }

  // Cyan border around photo
  ctx.strokeStyle = '#0ea5e9';
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.roundRect(px, py, pw, ph, pr);
  ctx.stroke();

  // Online active status dot
  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.arc(px + pw - 16, py + ph - 16, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Member Name
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 34px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(member.name, 320, 435);

  // Role
  ctx.fillStyle = '#0284c7';
  ctx.font = 'bold 16px sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(member.role.toUpperCase(), 320, 470);

  // Department
  ctx.fillStyle = '#64748b';
  ctx.font = '500 15px sans-serif';
  ctx.fillText(member.department, 320, 500);

  // Smart Security Clearance Box
  ctx.fillStyle = '#f8fafc';
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(50, 535, 540, 115, 14);
  ctx.fill();
  ctx.stroke();

  // Gold EMV Smart Microchip
  const chipX = 75, chipY = 558, chipW = 75, chipH = 65;
  const chipGrad = ctx.createLinearGradient(chipX, chipY, chipX + chipW, chipY + chipH);
  chipGrad.addColorStop(0, '#fde68a');
  chipGrad.addColorStop(0.5, '#f59e0b');
  chipGrad.addColorStop(1, '#d97706');
  ctx.fillStyle = chipGrad;
  ctx.beginPath();
  ctx.roundRect(chipX, chipY, chipW, chipH, 8);
  ctx.fill();
  ctx.strokeStyle = '#b45309';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Chip contact cuts
  ctx.strokeStyle = 'rgba(180, 83, 9, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(chipX + 24, chipY); ctx.lineTo(chipX + 24, chipY + chipH);
  ctx.moveTo(chipX + 50, chipY); ctx.lineTo(chipX + 50, chipY + chipH);
  ctx.moveTo(chipX, chipY + 32); ctx.lineTo(chipX + chipW, chipY + 32);
  ctx.stroke();

  // Security Credentials Text
  ctx.textAlign = 'left';
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('SECURITY CLEARANCE', 170, 575);
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('ISO/IEC 27001 SECURED', 170, 600);

  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('EMPLOYEE IDENTIFIER', 170, 626);
  ctx.fillStyle = '#0284c7';
  ctx.font = 'bold 17px monospace';
  ctx.fillText(member.empId, 320, 627);

  // Barcode Section
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(50, 675, 540, 80, 10);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  let bx = 70;
  const barPattern = [3, 2, 5, 2, 1, 4, 2, 6, 3, 2, 4, 1, 5, 3, 2, 4, 2, 5, 1, 3, 4, 2, 6, 2, 3, 5, 1, 4, 3, 2, 5, 4, 2, 3, 6, 2, 4, 1, 5, 3, 2, 4];
  for (let i = 0; i < barPattern.length && bx < 560; i++) {
    const w = barPattern[i];
    ctx.fillRect(bx, 692, w, 46);
    bx += w + (i % 3 === 0 ? 4 : 2);
  }

  // Footer Note
  ctx.fillStyle = '#94a3b8';
  ctx.font = '500 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Official Corporate Access Identification • CYGNUSA Technologies', 320, 785);

  return canvas.toDataURL('image/png');
}

/**
 * Creates texture for the back face of the 3D Lanyard.
 */
function createCardBackDataUrl(member: OfficeMember): string {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 640, 920);

  // Magnetic Stripe
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 60, 640, 90);

  // Signature Panel
  ctx.fillStyle = '#f1f5f9';
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.fillRect(50, 200, 540, 70);
  ctx.strokeRect(50, 200, 540, 70);

  ctx.fillStyle = '#64748b';
  ctx.font = 'italic 18px cursive, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(member.name, 70, 245);

  // ISO Notice
  ctx.fillStyle = '#334155';
  ctx.font = 'bold 13px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('INFORMATION SECURITY POLICY NOTICE', 50, 320);

  ctx.fillStyle = '#64748b';
  ctx.font = '11px sans-serif';
  const noticeLines = [
    'This credential remains the property of CYGNUSA Technologies Pvt Ltd.',
    'Access is granted subject to ISO/IEC 27001:2022 governance protocols.',
    'Unauthorized duplication, transfer, or tampering is strictly prohibited.',
    'If found, please return to CYGNUSA Global HQ, Chennai, India.',
  ];
  noticeLines.forEach((line, i) => {
    ctx.fillText(line, 50, 345 + i * 20);
  });

  // Emergency contact box
  ctx.fillStyle = '#f8fafc';
  ctx.strokeStyle = '#e2e8f0';
  ctx.beginPath();
  ctx.roundRect(50, 460, 540, 140, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('GLOBAL DELIVERY EMERGENCY DISPATCH', 70, 495);
  ctx.fillStyle = '#64748b';
  ctx.font = '12px sans-serif';
  ctx.fillText('Security Operations Center (SOC): +91 44 4850 8900', 70, 525);
  ctx.fillText('Enterprise Support: contact@cygnusa.in', 70, 550);
  ctx.fillText(`Primary Station: ${member.location}`, 70, 575);

  return canvas.toDataURL('image/png');
}

/**
 * Creates texture for the woven lanyard strap.
 */
function createStrapDataUrl(): string {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(0, 0, 400, 100);

  ctx.fillStyle = '#0ea5e9';
  ctx.fillRect(0, 0, 400, 6);
  ctx.fillRect(0, 94, 400, 6);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '2px';
  ctx.fillText('CYGNUSA TECHNOLOGIES • ISO 27001', 200, 56);

  return canvas.toDataURL('image/png');
}

export const TeamLanyardSection: React.FC = () => {
  // 1. Founder member for dedicated Owner Section
  const founder = useMemo(
    () => OFFICE_MEMBERS.find((m) => m.id === 'muthuraman') || OFFICE_MEMBERS[0],
    []
  );

  // 2. Technical Specialists shown in the Team Members Section
  const teamMembers = useMemo(
    () => OFFICE_MEMBERS.filter((m) => m.id !== 'muthuraman'),
    []
  );

  // Department filter state
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Currently selected member for the 3D Hanging Lanyard
  const [selectedMemberId, setSelectedMemberId] = useState<string>(
    teamMembers[0]?.id || OFFICE_MEMBERS[1]?.id || OFFICE_MEMBERS[0].id
  );

  const selectedMember = useMemo(
    () => OFFICE_MEMBERS.find((m) => m.id === selectedMemberId) || teamMembers[0] || OFFICE_MEMBERS[0],
    [selectedMemberId, teamMembers]
  );

  // Preload genuine avatar images for canvas drawing
  const [loadedAvatars, setLoadedAvatars] = useState<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    OFFICE_MEMBERS.forEach((member) => {
      const img = new Image();
      img.src = member.avatarUrl;
      img.onload = () => {
        setLoadedAvatars((prev) => ({ ...prev, [member.id]: img }));
      };
    });
  }, []);

  // Textures for the 3D Lanyard
  const frontImageUrl = useMemo(
    () => createCardFrontDataUrl(selectedMember, loadedAvatars[selectedMember.id]),
    [selectedMember, loadedAvatars]
  );
  const backImageUrl = useMemo(() => createCardBackDataUrl(selectedMember), [selectedMember]);
  const strapImageUrl = useMemo(() => createStrapDataUrl(), []);

  // Department list for filters
  const departments = useMemo(() => {
    const depts = Array.from(new Set(teamMembers.map((m) => m.department)));
    return ['All', ...depts];
  }, [teamMembers]);

  // Filtered team list
  const filteredTeam = useMemo(() => {
    if (activeFilter === 'All') return teamMembers;
    return teamMembers.filter((m) => m.department === activeFilter);
  }, [teamMembers, activeFilter]);

  // Step controls for coverflow with buttery-smooth 550ms sliding transition
  const [isSliding, setIsSliding] = useState(false);
  const slideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelectMember = (id: string) => {
    if (id === selectedMemberId) return;
    setIsSliding(true);
    setSelectedMemberId(id);
    if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current);
    slideTimeoutRef.current = setTimeout(() => {
      setIsSliding(false);
    }, 550);
  };

  const handleNextSpecialist = () => {
    const currentIdx = filteredTeam.findIndex((m) => m.id === selectedMember.id);
    const nextIdx = (currentIdx + 1) % filteredTeam.length;
    handleSelectMember(filteredTeam[nextIdx].id);
  };

  const handlePrevSpecialist = () => {
    const currentIdx = filteredTeam.findIndex((m) => m.id === selectedMember.id);
    const prevIdx = (currentIdx - 1 + filteredTeam.length) % filteredTeam.length;
    handleSelectMember(filteredTeam[prevIdx].id);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. SEPARATE OWNER / FOUNDER DEDICATED SECTION ("owner thani section")     */}
      {/* ========================================================================= */}
      <section id="leadership" className="py-20 md:py-28 bg-white border-b border-cygnusa-border overflow-hidden">
        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cygnusa-sky" />
              Office of the Founder &amp; Managing Director
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-slate-950 tracking-tight leading-tight">
              Visionary Leadership &amp; Strategic Governance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Founded on the bedrock principle of senior technology accountability, business-first engineering, and mission-critical cloud modernization.
            </p>
          </div>

          {/* Prominent Founder Showcase Card */}
          <div className="relative rounded-3xl bg-slate-50/70 border border-cygnusa-border p-6 sm:p-10 lg:p-12 shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Authentic Portrait */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-900 group aspect-[4/4.8]">
                  <img
                    src={founder.avatarUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Badge Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-cygnusa-void border border-slate-200 shadow-sm">
                    Founder &amp; Managing Director
                  </div>

                  {/* Bottom Info Strip inside Photo */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white flex items-center justify-between text-xs">
                    <span className="font-mono text-sky-400 font-bold">{founder.empId}</span>
                    <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {founder.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Vision & Profile */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
                      {founder.department} • {founder.empId}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md">
                      {founder.experience}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-950">
                    {founder.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-cygnusa-sky mt-1">
                    {founder.role}
                  </p>
                </div>

                {/* Executive Quote */}
                <div className="relative p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <Quote className="w-5 h-5 text-cygnusa-sky/40 mb-1.5" />
                  <p className="text-sm sm:text-[15px] font-normal text-slate-700 italic leading-relaxed font-sans">
                    &ldquo;At CYGNUSA, we build technology partnerships anchored in executive accountability, uncompromising cybersecurity, and outcome-driven cloud architectures for global enterprises.&rdquo;
                  </p>
                </div>

                {/* Detailed Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {founder.bio}
                </p>

                {/* Strategic Focus Pills */}
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2.5 font-heading">
                    Executive Focus &amp; Core Governance:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-xs font-semibold text-slate-800 border border-slate-200 shadow-2xs"
                      >
                        <Award className="w-3.5 h-3.5 text-cygnusa-sky" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Governance Strip */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-700">ISO 27001 Security Cleared • Global Delivery Governance</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-cygnusa-sky font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Chennai HQ &amp; IIT Guwahati R&amp;D Hub</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. TEAM MEMBERS SECTION: 3D Hanging Lanyard Coverflow Gallery              */}
      {/* ========================================================================= */}
      <section id="team" className="py-20 md:py-28 bg-slate-50 border-b border-cygnusa-border overflow-hidden">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cygnusa-sky" />
                <span>Official Access Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-slate-950 tracking-tight leading-tight">
                Engineering &amp; Technical Specialists
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Interact with the live 3D swinging lanyard badge in the center, and rotate across specialist access credentials in the 3D gallery.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveFilter(dept)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer select-none',
                    activeFilter === dept
                      ? 'bg-cygnusa-sky text-white border-cygnusa-sky shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-cygnusa-sky/50 hover:bg-slate-50'
                  )}
                >
                  {dept === 'All' ? 'All Specialists' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 3D Coverflow Stage with Real Hanging 3D Lanyard in Center              */}
          {/* Box around cards removed per user request: clean seamless layout       */}
          {/* ===================================================================== */}
          <div
            className="relative w-full overflow-hidden select-none py-2 sm:py-4 min-h-[500px] sm:min-h-[540px] flex flex-col justify-between"
          >
            {/* Top Bar: Status + Interaction hint + Reset Button */}
            <div className="relative z-30 flex items-center justify-between w-full pb-3 border-b border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 tracking-wider uppercase font-heading">
                  OFFICIAL 3D LANYARD BADGE • {selectedMember.name}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 border border-slate-200 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-cygnusa-sky animate-ping" />
                  Drag to swing • Click badge to flip
                </span>

                <span className="text-xs font-mono text-slate-500 font-semibold">
                  {filteredTeam.findIndex((m) => m.id === selectedMember.id) + 1} / {filteredTeam.length}
                </span>

                <button
                  type="button"
                  onClick={() => handleSelectMember(filteredTeam[0].id)}
                  title="Reset to first specialist"
                  aria-label="Reset to first specialist"
                  className="p-1.5 rounded-full bg-white border border-slate-200 hover:border-cygnusa-sky text-slate-600 hover:text-cygnusa-sky transition-colors cursor-pointer shadow-2xs"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3D Cover Flow Arc Stage */}
            <div
              className="relative flex-1 w-full flex items-center justify-center my-3 sm:my-4 min-h-[440px] sm:min-h-[470px]"
              style={{ perspective: '1100px' }}
            >
              {/* PERSISTENT 3D LANYARD STAGE IN CENTER: Never unmounts, dynamic texture updates */}
              <div
                style={{
                  left: '50%',
                  transform: 'translateX(-50%) translateZ(40px)',
                  zIndex: 35,
                  opacity: isSliding ? 0 : 1,
                  pointerEvents: isSliding ? 'none' : 'auto',
                  transition: 'opacity 240ms ease-in-out',
                }}
                className="absolute -top-3 sm:-top-5 w-[250px] sm:w-[270px] flex flex-col items-center justify-center"
              >
                <div className="w-full h-[400px] sm:h-[430px] relative pointer-events-auto">
                  <Lanyard
                    key="persistent-3d-lanyard"
                    frontImage={frontImageUrl}
                    backImage={backImageUrl}
                    strapImage={strapImageUrl}
                    imageFit="cover"
                    cardColor="#ffffff"
                    orientation="portrait"
                    finish="glossy"
                    cornerRadius={0.25}
                    size={0.62}
                    anchor="center"
                    strapLength={0.16}
                    strapColor="#0a0f1d"
                    strapWidth={0.65}
                    metal="silver"
                    gravity={1.05}
                    damping={0.48}
                    elasticity={0.48}
                    breeze={0.35}
                    interactive={true}
                    intro={false}
                    className="w-full h-full"
                  />
                </div>

                {/* Center Member Name Label Underneath */}
                <div className="-mt-1 text-center pointer-events-none">
                  <span className="block font-heading font-bold text-sm sm:text-base text-slate-900">
                    {selectedMember.name}
                  </span>
                  <span className="block text-xs font-semibold text-cygnusa-sky">
                    {selectedMember.role}
                  </span>
                </div>
              </div>

              {/* COVERFLOW CAROUSEL TRACK: Every card persistent in DOM for 60fps buttery-smooth glide */}
              {filteredTeam.map((member, idx) => {
                const count = filteredTeam.length;
                const selectedIdx = filteredTeam.findIndex((m) => m.id === selectedMember.id);
                let offset = idx - selectedIdx;
                if (offset > count / 2) offset -= count;
                if (offset < -count / 2) offset += count;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2;

                const spacing = 320;
                const translateX = offset * spacing;
                const translateZ = isCenter ? 25 : -80 - Math.abs(offset) * 45;
                const rotateY = isCenter ? 0 : offset < 0 ? 25 : -25;
                const scale = isCenter ? 1 : Math.max(0.78, 0.92 - Math.abs(offset) * 0.12);
                const opacity = isVisible
                  ? isCenter
                    ? isSliding
                      ? 1
                      : 0
                    : Math.max(0.45, 0.8 - Math.abs(offset) * 0.22)
                  : 0;
                const blur = isCenter ? 0 : Math.abs(offset) * 1.0;
                const zIndex = isCenter ? 20 : 50 - Math.abs(offset) * 5;

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleSelectMember(member.id)}
                    aria-label={`Select ${member.name} - ${member.role}`}
                    style={{
                      left: '50%',
                      transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex,
                      pointerEvents: isVisible && !isCenter ? 'auto' : 'none',
                      transition:
                        'transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms cubic-bezier(0.22, 1, 0.36, 1), filter 550ms cubic-bezier(0.22, 1, 0.36, 1)',
                      willChange: 'transform, opacity, filter',
                    }}
                    className={cn(
                      'absolute top-2 sm:top-3 flex flex-col items-center select-none text-left bg-transparent border-0 p-0',
                      !isCenter
                        ? 'cursor-pointer group/card focus:outline-hidden hover:opacity-100 hover:z-50'
                        : 'cursor-default'
                    )}
                  >
                    {/* Hanging Woven Lanyard Strap & Metal Swivel Clamp */}
                    <div className="flex flex-col items-center pointer-events-none -mb-2 z-10">
                      {/* Woven Strap */}
                      <div className="w-5 h-12 bg-[#0a0f1d] border-x border-sky-400/80 shadow-md flex items-center justify-center overflow-hidden transition-colors group-hover/card:border-sky-300">
                        <span className="text-[6px] font-bold text-slate-200 tracking-widest uppercase rotate-90 whitespace-nowrap opacity-80 font-mono">
                          CYGNUSA
                        </span>
                      </div>
                      {/* Silver Clamp */}
                      <div className="w-6 h-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-xs border border-slate-500 shadow-xs" />
                      {/* Swivel Ring */}
                      <div className="w-3 h-3 rounded-full border-2 border-slate-400 shadow-2xs -mt-0.5" />
                    </div>

                    {/* The Authentic Physical Smart ID Card */}
                    <div className="relative w-[190px] sm:w-[210px] aspect-[1/1.42] rounded-2xl bg-white p-3 flex flex-col justify-between overflow-hidden border border-slate-200/90 shadow-xl opacity-95 transition-all duration-200 group-hover/card:border-cygnusa-sky group-hover/card:shadow-sky-500/20 group-hover/card:shadow-2xl">
                      {/* Top Sky Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-cygnusa-sky to-cyan-400" />

                      {/* Header */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div>
                          <span className="block text-[10.5px] font-extrabold font-heading text-slate-950 tracking-wider">
                            CYGNUSA
                          </span>
                          <span className="block text-[6px] font-bold text-cygnusa-sky tracking-[2px]">
                            TECHNOLOGIES
                          </span>
                        </div>
                        <div className="text-cygnusa-sky text-[9.5px] font-bold font-mono">
                          (((•)))
                        </div>
                      </div>

                      {/* Central Photo */}
                      <div className="flex flex-col items-center my-auto text-center space-y-1">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-cygnusa-sky shadow-md bg-slate-100 transition-transform group-hover/card:scale-105">
                          <img
                            src={member.avatarUrl}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                          <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-500" />
                        </div>

                        <div>
                          <h4 className="text-xs font-bold font-heading text-slate-950 leading-tight">
                            {member.name}
                          </h4>
                          <p className="text-[9px] font-semibold text-cygnusa-sky uppercase tracking-wide mt-0.5">
                            {member.role}
                          </p>
                          <p className="text-[8.5px] text-slate-500 font-medium">
                            {member.department}
                          </p>
                        </div>
                      </div>

                      {/* Gold Chip & Security Tag */}
                      <div className="bg-slate-50 rounded-lg border border-slate-200/90 p-1.5 flex items-center justify-between">
                        <div className="w-5.5 h-4 rounded bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 border border-amber-500 p-0.5 flex flex-col justify-between shadow-2xs">
                          <div className="w-full h-[0.5px] bg-amber-700/40" />
                          <div className="w-full h-[0.5px] bg-amber-700/40" />
                        </div>
                        <div className="text-right">
                          <span className="block text-[7px] font-mono text-slate-500">ISO 27001 SECURED</span>
                          <span className="block font-mono text-[9.5px] font-bold text-slate-900">{member.empId}</span>
                        </div>
                      </div>

                      {/* Barcode */}
                      <div className="bg-slate-950 rounded-md p-1 flex items-center justify-center">
                        <div className="w-full h-3 bg-[repeating-linear-gradient(90deg,#fff,#fff_2px,transparent_2px,transparent_5px)]" />
                      </div>
                    </div>

                    {/* Member label underneath */}
                    <div className="mt-2 text-center">
                      <span className="block font-heading font-bold text-xs sm:text-sm text-slate-900 group-hover/card:text-cygnusa-sky transition-colors">
                        {member.name}
                      </span>
                      <span className="block text-[10px] font-semibold text-slate-500">
                        {member.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls Bar: Left & Right Arrows + Indicator Dots */}
            <div className="relative z-30 flex items-center justify-between w-full pt-3 sm:pt-4 border-t border-slate-200/80">
              <button
                type="button"
                onClick={handlePrevSpecialist}
                aria-label="Previous Specialist"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-cygnusa-sky text-slate-700 hover:text-cygnusa-sky transition-colors cursor-pointer text-xs font-semibold shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {filteredTeam.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleSelectMember(m.id)}
                    aria-label={`Go to ${m.name}`}
                    className={cn(
                      'transition-all duration-200 rounded-full cursor-pointer',
                      m.id === selectedMember.id
                        ? 'w-6 h-2 bg-cygnusa-sky'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextSpecialist}
                aria-label="Next Specialist"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-cygnusa-sky text-slate-700 hover:text-cygnusa-sky transition-colors cursor-pointer text-xs font-semibold shadow-xs"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* Selected Specialist Official Profile & Verified Credentials           */}
          {/* ===================================================================== */}
          <div className="mt-8 bg-white rounded-3xl border border-cygnusa-border shadow-card p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Portrait, Name & Location */}
              <div className="lg:col-span-5 flex items-start gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cygnusa-sky shadow-md bg-slate-100 shrink-0">
                  <img
                    src={selectedMember.avatarUrl}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-950">
                      {selectedMember.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-cygnusa-sky bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {selectedMember.empId}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-cygnusa-sky mt-1">
                    {selectedMember.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                    <span>{selectedMember.department}</span>
                    <span>•</span>
                    <span className="text-slate-700 font-medium">{selectedMember.experience}</span>
                  </p>
                  <p className="text-xs text-slate-600 mt-1.5 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-cygnusa-sky" />
                    <span>{selectedMember.location}</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Bio, Competencies & Action */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1 font-heading">
                    Executive Overview &amp; Delivery Responsibilities
                  </span>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-heading">
                    Verified Technical Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-xs font-semibold text-slate-800 border border-slate-200 shadow-2xs"
                      >
                        <Award className="w-3.5 h-3.5 text-cygnusa-sky" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Governance Strip & Consultation Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-700">ISO/IEC 27001 Security Cleared • Active Delivery Access</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cygnusa-sky hover:bg-cygnusa-sky-hover text-white text-xs sm:text-sm font-semibold transition-colors duration-150 shadow-sm"
                    >
                      <span>Consult with {selectedMember.name.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/case-studies"
                      className="text-xs font-semibold text-slate-600 hover:text-cygnusa-sky transition-colors inline-flex items-center gap-1"
                    >
                      <span>Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

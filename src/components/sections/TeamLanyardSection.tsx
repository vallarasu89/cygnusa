import React, { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { Lanyard } from '@/components/common/Lanyard';
import { ShieldCheck, Award, Sparkles, Move3d, MapPin, CheckCircle2, Quote } from 'lucide-react';
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
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
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
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
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
    avatarUrl: "",
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
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    experience: '8+ Years Applied AI / ML',
    location: 'IIT Guwahati R&D Hub',
    bio: 'Leads our academic and applied AI research laboratory in the IIT Guwahati campus. Specializes in enterprise private RAG knowledge engines, document OCR automation, and model safety.',
    specialties: ['Private Enterprise RAG', 'Automated Document OCR', 'Model Safety & Alignment'],
  },
];

function createCardFrontDataUrl(member: OfficeMember): string {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background - Clean Premium White Card with subtle gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 640, 920);
  bgGrad.addColorStop(0, '#ffffff');
  bgGrad.addColorStop(0.85, '#f8fafc');
  bgGrad.addColorStop(1, '#f1f5f9');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 640, 920);

  // Top Accent Banner - Cygnusa Sky
  const topGrad = ctx.createLinearGradient(0, 0, 640, 0);
  topGrad.addColorStop(0, '#0284c7');
  topGrad.addColorStop(0.5, '#0ea5e9');
  topGrad.addColorStop(1, '#38bdf8');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, 640, 36);

  // Top Header Area: CYGNUSA Branding
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 32px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CYGNUSA', 320, 110);

  ctx.fillStyle = '#0ea5e9';
  ctx.font = '600 14px sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('TECHNOLOGIES', 320, 134);

  // Subtle separator line
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(80, 160);
  ctx.lineTo(560, 160);
  ctx.stroke();

  // Photo Frame (Circle or Rounded Rect)
  const px = 220;
  const py = 190;
  const pw = 200;
  const ph = 200;
  const pr = 20;

  // Outer glow / shadow box
  ctx.fillStyle = '#f1f5f9';
  ctx.beginPath();
  ctx.roundRect(px - 6, py - 6, pw + 12, ph + 12, pr + 4);
  ctx.fill();

  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(px, py, pw, ph, pr);
  ctx.fill();

  // Draw initials placeholder on canvas
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 72px sans-serif';
  ctx.textAlign = 'center';
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);
  ctx.fillText(initials, 320, 315);

  // Member Name
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 34px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(member.name, 320, 445);

  // Member Role / Designation
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText(member.role.toUpperCase(), 320, 480);

  // Department
  ctx.fillStyle = '#64748b';
  ctx.font = '500 16px sans-serif';
  ctx.fillText(member.department, 320, 510);

  // Smart Security Chip & ISO Badge Box
  ctx.fillStyle = '#f8fafc';
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(80, 545, 480, 150, 14);
  ctx.fill();
  ctx.stroke();

  // Smart Contactless Chip Graphic (Gold/Metallic effect)
  ctx.fillStyle = '#e2b342';
  ctx.beginPath();
  ctx.roundRect(110, 575, 75, 55, 8);
  ctx.fill();
  ctx.strokeStyle = '#b8860b';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Chip inner trace
  ctx.strokeStyle = '#996515';
  ctx.strokeRect(125, 575, 45, 55);
  ctx.strokeRect(110, 595, 75, 15);

  // Badge Details
  ctx.textAlign = 'left';
  ctx.fillStyle = '#64748b';
  ctx.font = '12px monospace';
  ctx.fillText('SECURITY CLEARANCE', 210, 580);
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('ISO/IEC 27001 SECURED', 210, 604);

  ctx.fillStyle = '#64748b';
  ctx.font = '12px monospace';
  ctx.fillText('EMPLOYEE IDENTIFIER', 210, 635);
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'bold 18px monospace';
  ctx.fillText(member.empId, 210, 658);

  // Bottom Barcode / Hologram Security Strip
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(80, 725, 480, 80, 10);
  ctx.fill();

  // Barcode Lines
  ctx.fillStyle = '#ffffff';
  for (let x = 110; x < 530; x += 6) {
    const w = (x % 4 === 0) ? 3 : 1.5;
    ctx.fillRect(x, 740, w, 50);
  }

  // Card Footer Note
  ctx.textAlign = 'center';
  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px sans-serif';
  ctx.fillText('Official Corporate Access Identification • CYGNUSA Technologies', 320, 845);

  return canvas.toDataURL('image/png');
}

function createCardBackDataUrl(member: OfficeMember): string {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 640, 920);

  // Top Sky Stripe
  ctx.fillStyle = '#0ea5e9';
  ctx.fillRect(0, 0, 640, 24);

  // Header
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CYGNUSA TECHNOLOGIES PVT LTD', 320, 90);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px monospace';
  ctx.fillText('CIN: U72900TN2020PTC135633', 320, 115);

  // Magnetic Stripe
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 150, 640, 110);

  // Terms of Use
  ctx.textAlign = 'left';
  ctx.fillStyle = '#cbd5e1';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('PROPERTY OF CYGNUSA TECHNOLOGIES', 70, 310);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px sans-serif';
  const terms = [
    'This credential card remains the property of CYGNUSA Technologies Pvt Ltd.',
    'It must be worn and clearly visible at all times within all corporate facilities,',
    'client campuses, and affiliated engineering delivery centers.',
    'If found, please return to any CYGNUSA office or contact Security Operations.',
  ];
  terms.forEach((t, i) => {
    ctx.fillText(t, 70, 340 + i * 22);
  });

  // Global Delivery Addresses
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('GLOBAL HEADQUARTERS & DELIVERY CENTERS', 70, 460);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '12px sans-serif';
  ctx.fillText('• Chennai Corporate HQ: Alwarpet, Chennai, Tamil Nadu 600018', 70, 490);
  ctx.fillText('• Academic R&D Hub: IIT Guwahati Campus, Assam 781039', 70, 515);
  ctx.fillText('• Emergency Support Desk: +91-98840 81174 | support@cygnusa.in', 70, 540);

  // Signature Block
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(70, 580, 500, 75);
  ctx.fillStyle = '#64748b';
  ctx.font = '11px sans-serif';
  ctx.fillText('AUTHORIZED OFFICER SIGNATURE', 85, 602);
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'italic 24px serif';
  ctx.fillText('Arunachalam K.', 90, 638);

  // Member Identifier confirmation
  ctx.textAlign = 'center';
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 18px monospace';
  ctx.fillText(`ISSUED TO: ${member.name.toUpperCase()} (${member.empId})`, 320, 715);

  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('✓ ISO 27001 • ISO 20000-1 • ISO 9001 CERTIFIED', 320, 750);

  // QR Code Graphic placeholder
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(270, 780, 100, 100);
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(280, 790, 30, 30);
  ctx.fillRect(330, 790, 30, 30);
  ctx.fillRect(280, 840, 30, 30);
  ctx.fillRect(325, 835, 35, 35);

  return canvas.toDataURL('image/png');
}

function createStrapDataUrl(): string {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Woven Strap Background: Void Navy
  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(0, 0, 400, 100);

  // Woven border edges in Cygnusa Sky
  ctx.fillStyle = '#0ea5e9';
  ctx.fillRect(0, 0, 400, 6);
  ctx.fillRect(0, 94, 400, 6);

  // Repeating Brand Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '2px';
  ctx.fillText('CYGNUSA TECHNOLOGIES • ISO 27001', 200, 56);

  return canvas.toDataURL('image/png');
}

export const TeamLanyardSection: React.FC = () => {
  // Founder member highlighted individually at the top
  const founder = useMemo(
    () => OFFICE_MEMBERS.find((m) => m.id === 'muthuraman') || OFFICE_MEMBERS[0],
    []
  );

  // Remaining team members shown in ID card gallery
  const teamMembers = useMemo(
    () => OFFICE_MEMBERS.filter((m) => m.id !== 'muthuraman'),
    []
  );

  // Department filter state
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Currently selected member for the live 3D Lanyard Card (defaults to the first team specialist)
  const [selectedMemberId, setSelectedMemberId] = useState<string>(
    teamMembers[0]?.id || OFFICE_MEMBERS[0].id
  );

  const selectedMember = useMemo(
    () => OFFICE_MEMBERS.find((m) => m.id === selectedMemberId) || teamMembers[0] || OFFICE_MEMBERS[0],
    [selectedMemberId, teamMembers]
  );

  // Extract department list
  const departments = useMemo(() => {
    const depts = Array.from(new Set(teamMembers.map((m) => m.department)));
    return ['All', ...depts];
  }, [teamMembers]);

  // Filtered team list
  const filteredTeam = useMemo(() => {
    if (activeFilter === 'All') return teamMembers;
    return teamMembers.filter((m) => m.department === activeFilter);
  }, [teamMembers, activeFilter]);

  // 3D Canvas textures for the selected member
  const frontImageUrl = useMemo(() => createCardFrontDataUrl(selectedMember), [selectedMember]);
  const backImageUrl = useMemo(() => createCardBackDataUrl(selectedMember), [selectedMember]);
  const strapImageUrl = useMemo(() => createStrapDataUrl(), []);

  return (
    <section id="leadership" className="py-20 bg-slate-50 border-b border-cygnusa-border overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cygnusa-sky" />
            Executive Leadership &amp; Engineering Teams
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-cygnusa-void tracking-tight">
            Meet the Minds Behind CYGNUSA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-cygnusa-mist font-sans leading-relaxed">
            Enterprise technology leaders, cybersecurity auditors, and cloud architects taking direct ownership of client outcomes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. FOUNDER / EXECUTIVE SPOTLIGHT (INDIVIDUAL PROMINENT CARD AT TOP)       */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50/40 border border-cygnusa-border p-6 sm:p-10 shadow-sm overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cygnusa-sky via-cyan-500 to-blue-600" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Founder Executive Portrait */}
              <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
                <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-900 group">
                    <img
                      src={founder.avatarUrl}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-cygnusa-void border border-slate-200 shadow-sm">
                      Founder &amp; Managing Director
                    </div>

                    {/* Bottom Info Strip inside Photo */}
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                      <span className="font-mono text-cyan-300 font-semibold">{founder.empId}</span>
                      <span className="flex items-center gap-1 text-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {founder.location}
                      </span>
                    </div>
                  </div>

                  {/* Button to view Founder's badge in the 3D card below */}
                  <button
                    type="button"
                    onClick={() => setSelectedMemberId(founder.id)}
                    className={cn(
                      'mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer',
                      selectedMemberId === founder.id
                        ? 'bg-cygnusa-sky text-white ring-2 ring-cygnusa-sky/30 shadow-md'
                        : 'bg-cygnusa-void text-white hover:bg-cygnusa-sky'
                    )}
                  >
                    <Move3d className="w-4 h-4 text-cyan-300" />
                    <span>
                      {selectedMemberId === founder.id
                        ? "Currently Displaying Founder's 3D Badge ↓"
                        : "Display Founder's 3D Badge Below ↓"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Leadership Bio, Vision & Credentials */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cygnusa-sky bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {founder.department} • {founder.empId}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {founder.experience}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void mt-1">
                    {founder.name}
                  </h3>
                  <p className="text-base font-semibold text-cygnusa-sky mt-0.5">
                    {founder.role}
                  </p>
                </div>

                {/* Executive Vision Quote */}
                <div className="relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <Quote className="w-6 h-6 text-cygnusa-sky/30 mb-1" />
                  <p className="text-sm sm:text-base font-medium text-slate-700 italic leading-relaxed">
                    &ldquo;At CYGNUSA, we build technology partnerships anchored in executive accountability, uncompromising cybersecurity, and outcome-driven cloud architectures for global enterprises.&rdquo;
                  </p>
                </div>

                {/* Detailed Bio */}
                <p className="text-sm sm:text-base text-cygnusa-mist leading-relaxed font-sans">
                  {founder.bio}
                </p>

                {/* Specialties Pills */}
                <div className="pt-1">
                  <span className="text-xs font-bold text-cygnusa-void uppercase tracking-wider block mb-2.5">
                    Strategic Leadership &amp; Core Focus:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-xs font-semibold text-cygnusa-void border border-slate-200 shadow-2xs hover:border-cygnusa-sky/50 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5 text-cygnusa-sky" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security Clearance Assurance Strip */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-cygnusa-mist">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-700">ISO 27001 Security Cleared • Global Delivery Governance</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-cygnusa-sky font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>22+ Yrs Enterprise Experience</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ALL TEAM MEMBERS & DIRECT LIVE 3D LANYARD SHOWCASE                     */}
        {/* ========================================================================= */}
        <div>
          {/* Section Divider & Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-cygnusa-border">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 mb-2">
                <span>The Cygnusa Specialists</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-cygnusa-void">
                Engineering &amp; Advisory Team
              </h3>
              <p className="text-sm text-cygnusa-mist mt-1">
                Select any specialist on the left to inspect and interact with their authentic 3D access badge live on the right.
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
                      : 'bg-white text-cygnusa-mist border-slate-200 hover:border-cygnusa-sky/50 hover:bg-slate-50'
                  )}
                >
                  {dept === 'All' ? 'All Specialists' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Direct Showcase: Left = Employee ID Cards List, Right = Live 3D Lanyard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Scrollable Employee ID Cards Directory (~55%) */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-cygnusa-mist px-1">
                <span>Select Team Specialist ({filteredTeam.length} Members)</span>
                <span className="text-cygnusa-sky">Click card to load 3D badge →</span>
              </div>

              {/* Scrollable ID Cards Track */}
              <div className="space-y-3 max-h-[580px] sm:max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredTeam.map((member) => {
                  const isSelected = member.id === selectedMember.id;
                  return (
                    <div
                      key={member.id}
                      onClick={() => setSelectedMemberId(member.id)}
                      className={cn(
                        'group relative rounded-2xl border p-4 sm:p-4.5 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none',
                        isSelected
                          ? 'bg-sky-50/70 border-cygnusa-sky ring-2 ring-cygnusa-sky/30 shadow-md scale-[1.01]'
                          : 'bg-white border-slate-200 hover:border-cygnusa-sky/50 hover:bg-slate-50/80 shadow-2xs'
                      )}
                    >
                      {/* Left side: Avatar + Info */}
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Mini ID Photo */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-white shadow-sm bg-slate-100 shrink-0">
                          <img
                            src={member.avatarUrl}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                          {isSelected && (
                            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-500" />
                          )}
                        </div>

                        {/* Name, Role & Department */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4
                              className={cn(
                                'text-sm sm:text-base font-bold font-heading truncate',
                                isSelected ? 'text-cygnusa-void' : 'text-slate-800 group-hover:text-cygnusa-sky'
                              )}
                            >
                              {member.name}
                            </h4>
                            <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                              {member.empId}
                            </span>
                          </div>

                          <p className="text-xs font-semibold text-cygnusa-sky truncate mt-0.5">
                            {member.role}
                          </p>

                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            <span className="text-[11px] text-slate-500 bg-slate-100/90 px-2 py-0.5 rounded font-medium">
                              {member.department}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              • {member.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right side: EMV Chip & Selection Indicator */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        {/* Mini Gold Chip Graphic */}
                        <div className="w-7 h-5 rounded bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 border border-amber-400/80 p-0.5 flex flex-col justify-between shadow-2xs">
                          <div className="w-full h-[1px] bg-amber-600/30" />
                          <div className="flex justify-between">
                            <div className="w-1.5 h-1 border-r border-amber-600/30" />
                            <div className="w-1.5 h-1 border-l border-amber-600/30" />
                          </div>
                          <div className="w-full h-[1px] bg-amber-600/30" />
                        </div>

                        {/* Badge Pill status */}
                        <span
                          className={cn(
                            'text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors inline-flex items-center gap-1',
                            isSelected
                              ? 'bg-cygnusa-sky text-white border-cygnusa-sky'
                              : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-slate-200/80'
                          )}
                        >
                          <Move3d className="w-3 h-3" />
                          <span>{isSelected ? 'Live in 3D' : 'Select'}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Specialist Bio & Specialties Card */}
              <div className="p-5 rounded-2xl bg-white border border-cygnusa-border shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cygnusa-sky uppercase tracking-wider">
                    {selectedMember.department} • {selectedMember.empId}
                  </span>
                  <span className="text-slate-500 font-medium">
                    {selectedMember.experience}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cygnusa-mist leading-relaxed font-sans">
                  {selectedMember.bio}
                </p>

                {/* Specialties pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedMember.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-cygnusa-void border border-slate-200/80"
                    >
                      <Award className="w-3 h-3 text-cygnusa-sky" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: DIRECT LIVE 3D PHYSICS LANYARD CANVAS (~45%) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="sticky top-24 w-full">
                <div className="relative w-full h-[580px] sm:h-[640px] rounded-3xl bg-gradient-to-b from-white via-slate-50 to-slate-100/90 border border-slate-200 shadow-md overflow-hidden flex items-center justify-center group">
                  {/* Subtle Ambient Radial Lighting */}
                  <div className="absolute inset-0 bg-radial-gradient from-slate-200/30 via-transparent to-transparent pointer-events-none" />

                  {/* Top Header Pill inside 3D Canvas */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] font-bold text-cygnusa-void">
                      <span className="w-2 h-2 rounded-full bg-cygnusa-sky animate-ping" />
                      <span>3D ACCESS BADGE: {selectedMember.name}</span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-slate-500 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded border border-slate-200">
                      {selectedMember.empId}
                    </span>
                  </div>

                  {/* DIRECT LIVE 3D LANYARD THREE.JS CANVAS */}
                  <Lanyard
                    key={selectedMember.id}
                    frontImage={frontImageUrl}
                    backImage={backImageUrl}
                    strapImage={strapImageUrl}
                    imageFit="cover"
                    cardColor="#ffffff"
                    orientation="portrait"
                    finish="glossy"
                    cornerRadius={0.25}
                    size={0.65}
                    anchor="center"
                    strapLength={0.48}
                    strapColor="#0a0f1d"
                    strapWidth={0.65}
                    metal="silver"
                    gravity={1.05}
                    damping={0.48}
                    elasticity={0.48}
                    breeze={0.4}
                    interactive={true}
                    intro={true}
                    className="w-full h-full"
                  />

                  {/* Bottom Interactive Floating Hint */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-max max-w-[90%]">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-[11.5px] font-semibold text-cygnusa-void border border-slate-200 shadow-sm backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-cygnusa-sky animate-ping shrink-0" />
                      <span className="truncate">Click &amp; drag to swing • Click to flip badge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

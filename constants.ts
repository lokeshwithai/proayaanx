import { Course, Faculty, Paper } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'RTL Design & Verification',
    description: 'Master the art of Register Transfer Level design using Verilog and SystemVerilog. Includes deep dives into FSM design, clock domain crossing, and functional verification methodologies.',
    duration: '6 Months',
    level: 'Intermediate',
    topics: ['Verilog HDL', 'SystemVerilog', 'UVM Framework', 'AXI Protocol', 'Code Coverage'],
    image: 'https://images.unsplash.com/photo-1649026167802-097b62d6847f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'c2',
    title: 'Physical Design Automation',
    description: 'From netlist to GDSII. Learn the complete backend flow including floorplanning, placement, clock tree synthesis (CTS), routing, and sign-off checks.',
    duration: '4 Months',
    level: 'Advanced',
    topics: ['Floorplanning', 'Static Timing Analysis (STA)', 'DRC/LVS', 'Power Analysis', 'Signal Integrity'],
    image: 'https://images.unsplash.com/photo-1555664424-778a69032054?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'c3',
    title: 'Analog Layout Design',
    description: 'Specialized training in custom analog layout. Focus on matching, shielding, floorplanning, and physical verification of amplifiers and PLLs using industry-standard EDA tools.',
    duration: '5 Months',
    level: 'Advanced',
    topics: ['CMOS Layout', 'FinFET Design', 'Matching Techniques', 'Electromigration', 'Physical Verification'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'c4',
    title: 'FPGA Prototyping',
    description: 'Hands-on training with Xilinx and Intel FPGAs. Learn to map algorithms to hardware, constraints management, and board-level debugging.',
    duration: '3 Months',
    level: 'Beginner',
    topics: ['FPGA Architecture', 'Vivado/Quartus', 'Timing Constraints', 'Hardware Debugging', 'Embedded Systems'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop'
  }
];

export const FACULTY: Faculty[] = [
  {
    id: 'f1',
    name: 'Dr. Robert Vance',
    role: 'Head of Digital Design',
    bio: 'Former Principal Engineer at Intel with 20+ years of experience in microprocessor architecture. PhD from Stanford University.',
    specialization: 'High-Speed Digital Logic',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'f2',
    name: 'Prof. Sarah Lin',
    role: 'Research Lead',
    bio: 'Specializes in Low-power VLSI design. Holds 15 patents in leakage power reduction techniques. Previously worked at Qualcomm.',
    specialization: 'Low Power VLSI',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'f3',
    name: 'Eng. David Chen',
    role: 'Senior Physical Design Instructor',
    bio: 'Expert in 5nm and 3nm physical design flows. Passionate about teaching PnR methodologies to the next generation.',
    specialization: 'Backend Implementation',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop'
  }
];

export const MOCK_PAPERS: Paper[] = [
  {
    id: 'p1',
    title: 'Optimization of Hold Time Violations in 7nm FinFET Technology',
    authors: ['A. Sharma', 'Dr. R. Vance', 'ProAyaanX Research Lab'],
    abstract: 'This paper explores novel buffer insertion strategies to mitigate hold time violations in high-density standard cell libraries utilizing 7nm FinFET processes.',
    publicationDate: '2023-11-15',
    category: 'Physical Design',
    status: 'Published'
  },
  {
    id: 'p2',
    title: 'A Novel Asynchronous FIFO Architecture for Multi-Clock Domain SoCs',
    authors: ['K. Patel', 'ProAyaanX Student Group'],
    abstract: 'We present a robust pointer synchronization technique that reduces latency by 15% compared to traditional Gray-code counters in high-frequency domains.',
    publicationDate: '2024-02-10',
    category: 'Digital Architecture',
    status: 'Published'
  },
  {
    id: 'p3',
    title: 'Leakage Current Reduction in SRAM Arrays using Dynamic Voltage Scaling',
    authors: ['J. Doe', 'Prof. Sarah Lin'],
    abstract: 'An analysis of DVS techniques applied specifically to L2 cache memory banks during standby modes to extend battery life in mobile processors.',
    publicationDate: '2024-05-01',
    category: 'Low Power Design',
    status: 'Under Review'
  }
];
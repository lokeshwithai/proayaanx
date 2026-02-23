import { Course, Paper } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'RTL Design & Verification',
    description: 'Master the art of Register Transfer Level design using Verilog and SystemVerilog. Includes deep dives into FSM design, clock domain crossing, and functional verification methodologies.',
    duration: '6 Months',
    level: 'Intermediate',
    topics: ['Verilog HDL', 'SystemVerilog', 'UVM Framework', 'AXI Protocol', 'Code Coverage'],
    image: 'https://picsum.photos/seed/rtl/800/600'
  },
  {
    id: 'c2',
    title: 'Physical Design Automation',
    description: 'From netlist to GDSII. Learn the complete backend flow including floorplanning, placement, clock tree synthesis (CTS), routing, and sign-off checks.',
    duration: '4 Months',
    level: 'Advanced',
    topics: ['Floorplanning', 'Static Timing Analysis (STA)', 'DRC/LVS', 'Power Analysis', 'Signal Integrity'],
    image: 'https://picsum.photos/seed/physical/800/600'
  },
  {
    id: 'c3',
    title: 'Analog Layout Design',
    description: 'Specialized training in custom analog layout. Focus on matching, shielding, floorplanning, and physical verification of amplifiers and PLLs using industry-standard EDA tools.',
    duration: '5 Months',
    level: 'Advanced',
    topics: ['CMOS Layout', 'FinFET Design', 'Matching Techniques', 'Electromigration', 'Physical Verification'],
    image: 'https://picsum.photos/seed/analog/800/600'
  },
  {
    id: 'c4',
    title: 'FPGA Prototyping',
    description: 'Hands-on training with Xilinx and Intel FPGAs. Learn to map algorithms to hardware, constraints management, and board-level debugging.',
    duration: '3 Months',
    level: 'Beginner',
    topics: ['FPGA Architecture', 'Vivado/Quartus', 'Timing Constraints', 'Hardware Debugging', 'Embedded Systems'],
    image: 'https://picsum.photos/seed/fpga/800/600'
  }
];

export const MOCK_PAPERS: Paper[] = [
  {
    id: 'p1',
    title: 'Optimization of Hold Time Violations in 7nm FinFET Technology',
    authors: ['A. Sharma', 'ProAyaanX Research Lab'],
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
    authors: ['J. Doe', 'ProAyaanX Research Lab'],
    abstract: 'An analysis of DVS techniques applied specifically to L2 cache memory banks during standby modes to extend battery life in mobile processors.',
    publicationDate: '2024-05-01',
    category: 'Low Power Design',
    status: 'Under Review'
  }
];
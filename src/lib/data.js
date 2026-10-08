export const socials = [
  { label: 'GitHub', href: 'https://github.com/AntObi' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0003-2107-153X' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-on/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Email', href: 'mailto:aonwuli@proton.me' }
];

export const recentWork = [
  {
    name: 'ElementEmbeddings',
    year: '2023',
    kind: 'Open source · representation learning',
    description:
      'Tools for analysing and comparing high-dimensional representations of chemical elements and ionic species.',
    href: 'https://github.com/WMD-group/ElementEmbeddings',
    links: [
      { label: 'Code', href: 'https://github.com/WMD-group/ElementEmbeddings' },
      { label: 'Paper', href: 'https://doi.org/10.1039/D3DD00121K' },
      { label: 'Release', href: 'https://zenodo.org/records/21365848' }
    ]
  },
  {
    name: 'Ionic species representations',
    year: '2024',
    kind: 'Research · materials informatics',
    description:
      'Representation learning for charged chemical species and its use in materials informatics.',
    href: 'https://doi.org/10.1063/5.0227009',
    links: [{ label: 'Paper', href: 'https://doi.org/10.1063/5.0227009' }]
  },
  {
    name: 'Mapping inorganic crystal chemical space',
    year: '2025',
    kind: 'Research · chemical space',
    description:
      'Mapping large inorganic composition spaces using learned chemical representations.',
    href: 'https://doi.org/10.1039/D4FD00063C',
    links: [{ label: 'Paper', href: 'https://doi.org/10.1039/D4FD00063C' }]
  },
  {
    name: 'Text-guided crystal generation',
    year: '2025',
    kind: 'Research · generative materials',
    description:
      'Exploration of crystal chemical space using text-guided generative artificial intelligence.',
    href: 'https://doi.org/10.1038/s41467-025-59636-y',
    links: [{ label: 'Paper', href: 'https://doi.org/10.1038/s41467-025-59636-y' }]
  },
  {
    name: 'Chemical filters for high-throughput materials design',
    year: '2026',
    kind: 'Research · materials screening',
    description:
      'Chemistry-aware constraints for ultra-high-throughput screening and generation.',
    href: 'https://arxiv.org/abs/2607.17910',
    links: [{ label: 'Preprint', href: 'https://arxiv.org/abs/2607.17910' }]
  },
  {
    name: 'PhD thesis',
    year: '2024',
    kind: 'Thesis · computational materials',
    description:
      'Rapid computational screening of materials for energy storage applications.',
    href: 'https://spiral.imperial.ac.uk/entities/publication/54dc546d-71cc-42f1-856c-83991809f017',
    links: [
      {
        label: 'Thesis',
        href: 'https://spiral.imperial.ac.uk/entities/publication/54dc546d-71cc-42f1-856c-83991809f017'
      }
    ]
  }
];

export const projects = [
  {
    name: 'ElementEmbeddings',
    repo: 'WMD-group/ElementEmbeddings',
    href: 'https://github.com/WMD-group/ElementEmbeddings',
    role: 'Developer',
    description:
      'Python tooling for comparing, visualising and analysing representations of chemical elements and ionic species.',
    tags: ['Materials informatics', 'Representation learning', 'Python']
  },
  {
    name: 'SMACT',
    repo: 'WMD-group/SMACT',
    href: 'https://github.com/WMD-group/SMACT',
    role: 'Contributor',
    description:
      'Open-source chemistry-aware screening and informatics tools for computational materials design.',
    tags: ['Materials discovery', 'Chemical screening', 'Python']
  }
];

export const publications = [
  {
    year: 2026,
    title: 'Chemical filters for ultra-high-throughput materials screening and generation',
    authors:
      'Kinga O. Mastej, Panyalak Detrattanawichai, Hyunsoo Park, Anthony Onwuli, Masahiro Negishi, Aron Walsh',
    venue: 'arXiv:2607.17910',
    href: 'https://arxiv.org/abs/2607.17910'
  },
  {
    year: 2025,
    title: 'Exploration of crystal chemical space using text-guided generative artificial intelligence',
    authors: 'Hyunsoo Park, Anthony Onwuli, Aron Walsh',
    venue: 'Nature Communications 16',
    href: 'https://doi.org/10.1038/s41467-025-59636-y'
  },
  {
    year: 2025,
    title: 'Mapping inorganic crystal chemical space',
    authors: 'Hyunsoo Park, Anthony Onwuli, Keith T. Butler, Aron Walsh',
    venue: 'Faraday Discussions 256, 601–613',
    href: 'https://doi.org/10.1039/D4FD00063C'
  },
  {
    year: 2024,
    title: 'Ionic species representations for materials informatics',
    authors: 'Anthony Onwuli, Keith T. Butler, Aron Walsh',
    venue: 'APL Machine Learning 2(3)',
    href: 'https://doi.org/10.1063/5.0227009'
  },
  {
    year: 2023,
    title: 'Element similarity in high-dimensional materials representations',
    authors: 'Anthony Onwuli, Ashish V. Hegde, Kevin V. T. Nguyen, Keith T. Butler, Aron Walsh',
    venue: 'Digital Discovery 2, 1558',
    href: 'https://doi.org/10.1039/D3DD00121K'
  }
];

export const experience = [
  {
    title: 'Machine Learning Scientist II',
    organisation: 'Materials Nexus',
    summary:
      'Scientific machine learning for materials discovery, spanning atomistic models, high-throughput computation, data and model workflows, evaluation, and platform-facing research software.'
  },
  {
    title: 'EPSRC Doctoral Prize Fellow',
    organisation: 'Imperial College London',
    summary:
      'Research in the Walsh Materials Design group on materials informatics, chemical representations, high-throughput computational screening and open-source research software.'
  }
];

export const education = [
  {
    title: 'PhD in Materials Research',
    organisation: 'Imperial College London',
    summary: 'Rapid computational screening of materials for energy storage applications.',
    href: 'https://spiral.imperial.ac.uk/entities/publication/54dc546d-71cc-42f1-856c-83991809f017'
  }
];

export const writingTopics = [
  {
    title: 'Atomistic machine learning',
    description:
      'Notes on ML interatomic potentials, training data, evaluation, physical inductive biases and simulation workflows.'
  },
  {
    title: 'Magnetic materials modelling',
    description:
      'Public technical notes on magnetic degrees of freedom, spin-conditioned atomistic models and magnetic simulation.'
  },
  {
    title: 'Thermodynamics and phase diagrams',
    description:
      'Practical notes on SQS, cluster expansions, free energies, CALPHAD and connecting atomistic calculations to phase stability.'
  },
  {
    title: 'Scientific ML engineering',
    description:
      'Reproducibility, high-throughput data generation, model interfaces, HPC workflows and research software design.'
  }
];

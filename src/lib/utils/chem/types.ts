export type element_type =
	| 'Nonmetal'
	| 'Noble Gas'
	| 'Alkali_Metal'
	| 'Alkaline Earth Metal'
	| 'Metalloid'
	| 'Halogen'
	| 'Metal'
	| 'Transition Metal'
	| 'Lanthanide'
	| 'Actinide'
	| 'Transactinide'
	| '';

export type element_state = 'gas' | 'liquid' | 'solid' | 'artificial';

export type element_symbol =
	| 'H'
	| 'He'
	| 'Li'
	| 'Be'
	| 'B'
	| 'C'
	| 'N'
	| 'O'
	| 'F'
	| 'Ne'
	| 'Na'
	| 'Mg'
	| 'Al'
	| 'Si'
	| 'P'
	| 'S'
	| 'Cl'
	| 'Ar'
	| 'K'
	| 'Ca'
	| 'Sc'
	| 'Ti'
	| 'V'
	| 'Cr'
	| 'Mn'
	| 'Fe'
	| 'Co'
	| 'Ni'
	| 'Cu'
	| 'Zn'
	| 'Ga'
	| 'Ge'
	| 'As'
	| 'Se'
	| 'Br'
	| 'Kr'
	| 'Rb'
	| 'Sr'
	| 'Y'
	| 'Zr'
	| 'Nb'
	| 'Mo'
	| 'Tc'
	| 'Ru'
	| 'Rh'
	| 'Pd'
	| 'Ag'
	| 'Cd'
	| 'In'
	| 'Sn'
	| 'Sb'
	| 'Te'
	| 'I'
	| 'Xe'
	| 'Cs'
	| 'Ba'
	| 'La'
	| 'Ce'
	| 'Pr'
	| 'Nd'
	| 'Pm'
	| 'Sm'
	| 'Eu'
	| 'Gd'
	| 'Tb'
	| 'Dy'
	| 'Ho'
	| 'Er'
	| 'Tm'
	| 'Yb'
	| 'Lu'
	| 'Hf'
	| 'Ta'
	| 'W'
	| 'Re'
	| 'Os'
	| 'Ir'
	| 'Pt'
	| 'Au'
	| 'Hg'
	| 'Tl'
	| 'Pb'
	| 'Bi'
	| 'Po'
	| 'At'
	| 'Rn'
	| 'Fr'
	| 'Ra'
	| 'Ac'
	| 'Th'
	| 'Pa'
	| 'U'
	| 'Np'
	| 'Pu'
	| 'Am'
	| 'Cm'
	| 'Bk'
	| 'Cf'
	| 'Es'
	| 'Fm'
	| 'Md'
	| 'No'
	| 'Lr'
	| 'Rf'
	| 'Db'
	| 'Sg'
	| 'Bh'
	| 'Hs'
	| 'Mt'
	| 'Ds'
	| 'Rg'
	| 'Cn'
	| 'Nh'
	| 'Fl'
	| 'Mc'
	| 'Lv'
	| 'Ts'
	| 'Og';

export interface element {
	AtomicNumber: number;
	Element: string;
	Symbol: element_symbol;
	AtomicMass: number;
	NumberofNeutrons: number;
	NumberofProtons: number;
	NumberofElectrons: number;
	Period: number;
	Group: number | undefined;
	Phase: string;
	Radioactive: boolean;
	Natural: boolean;
	Metal: boolean;
	Nonmetal: boolean;
	Metalloid: boolean;
	Type: string | undefined;
	AtomicRadius: number | undefined;
	Electronegativity: number | undefined;
	FirstIonization: number | undefined;
	Density: number | undefined;
	MeltingPoint: number | undefined;
	BoilingPoint: number | undefined;
	NumberOfIsotopes: number | undefined;
	Discoverer: string | undefined;
	Year: number | undefined;
	SpecificHeat: number | undefined;
	NumberofShells: number;
	NumberofValence: number | undefined;
}

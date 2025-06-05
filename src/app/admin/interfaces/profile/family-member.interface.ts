export interface FamilyMember {
  // Informations d'identité principales
  matricule: string;
  nom: string;
  postnom: string;
  prenom: string;
  nomsReduit: string;

  // Informations personnelles
  genre: string;
  dateNaissance: string;
  etatCivil: string;

  // Informations professionnelles
  direction: string;
  codeDirection: string;

  // Statut dans le système
  actif: number;
  prisEnCharge: string;
  type: number;
  typeString: string;

  // Informations visuelles
  isPhotographed: boolean;
  photo: string;

  // Contact
  adresse: string;
  telephone: string;
  email: string;
}

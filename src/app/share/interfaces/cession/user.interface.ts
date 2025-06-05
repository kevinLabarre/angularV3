// Interface pour les données utilisateur
export interface User {
  idUser: string;
  userName: string;
  nom: string;
  postnom?: string;
  prenom: string;
  sexe: number;
  adresse?: string;
  telephone?: string;
  email?: string | null;
  idProfil?: number;
  isHospitalUser?: boolean;
  isLocked?: boolean;
  nbreTentatives?: number;
  firstConnexion?: boolean;
  idInstitution?: string | null;
  focalPoint?: boolean;
  numOrdMed?: string | null;
  dateCreation?: string;
  lastConnexion?: string;
}


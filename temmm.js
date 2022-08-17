import { PlayContribution } from './PlayContribution';
import {ProductionContribution} from './ProductionContribution';

export type Artist = {
  id: string;
  firstName: string;
  lastName: string;
  dob?: Date;
  bio?: string;
  hometown?: string;
  homeState?: string;
  homeCountry?: string;
  unionAffiliation?: string;
  professionalName?: string;
  awards?: string[];
  resourceLocation?: string;
  website?: string;
  createdAt: Date;
  upDatedAt: Date;
  playContributions: PlayContribution[];
  productionContributions: ProductionContribution[]
}


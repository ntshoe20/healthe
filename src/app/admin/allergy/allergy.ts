import { AllergyTypeEnum } from "../shared/allergy-type";

export class Allergy {
    allergyID: number;
    allergyType: AllergyTypeEnum;
    description: string
    patientID: string;
    dateCreated: Date;
    dateModified: Date;
}

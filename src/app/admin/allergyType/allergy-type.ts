import { AllergyTypeEnum } from "../shared/allergy-type";

export class AllergyType {
    allergyType: AllergyTypeEnum
    description: string
    patientId: string
    dateCreated: Date
    dateModified: Date
}

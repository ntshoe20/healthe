import { Gender } from "../shared/gender";
import { Title } from "../shared/title";
import { BloodType } from "../shared/blood-type";

export class Patient {
    title: Title
    bloodType: BloodType
    gender: Gender
    firstName: string
    dateOfBirth: Date
    idNumber: string
    passportNumber: string
    isSaCitizen: boolean
    country: string
    cellphoneNumber: string
    homeNumber: string
    workNuber: string
    email: string
    dateCreated: Date
    dateModified: Date
}

import { v4 as uuidv4 } from "uuid"
import { skillsPreset } from "./skillsPreset"

export const personalPreset =
  {
    name: `John`,
    surname: `Doe`,
    email: `John.doe52@gmail.com`,
    phoneNumber: 37052365895,
    city: `New york`,
    country: `USA`,
    profSum: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Est velit egestas dui id ornare arcu odio ut.`,
    jobTitle: `Production Manager`,
    address: `King's street`,
    postalCode: `55965`,
    driving: `B`,
    nationality: `American`,
    birthPlace: `New York`,
    birthDate: `1985-07-05`,
    linkedIn: `linkedin.com/johndoe`,
  }


export const employmentPreset = [
  {
    jobTitle: `Directing Manager`,
    employer: `Google`,
    startDate: `2015-02`,
    endDate: `2023-05`,
    city: `Washington`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    id: uuidv4(),
  },

  {
    jobTitle: `Customer Support`,
    employer: `Apple`,
    startDate: `2012-01`,
    endDate: `2014-09`,
    city: `Washington`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    id: uuidv4(),
  },
]

export const educationPreset = [
  {
    school: `Harward`,
    degree: `Bachelor's`,
    starDate: `2009`,
    endDate: `2013`,
    city: `Massachusetts`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    id: uuidv4(),
  },
]

export const languagePreset = [`English`, `Spanish`]

export const userSkillPreset = [
  skillsPreset[0],
  skillsPreset[2],
  skillsPreset[4],
  skillsPreset[5],
  skillsPreset[10],
]

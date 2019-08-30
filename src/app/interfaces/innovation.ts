export interface Innovation {
  id?: number
  title?: string,
  narrative?: string,
  projectId?: number,
  stageOfInnovation?: { code?: null },
  descriptionStage?: string,
  nextUserOrganizationTypes?: [],
  innovationType?: { code?: null },
  otherInnovationType?: string,
  geographicScopes?: [],
  regions?: [],
  countries?: [],
  equitativeEffort?: boolean,
  leadOrganization?: {},
  contributingInstitutions?: [],
  evidenceLink?: string,
  contributingCGIAREntities?: [],
  phase?: {
    name: string,
    year: number
  }
}

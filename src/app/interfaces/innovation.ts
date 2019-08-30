export interface Innovation {
  id?: number
  title?: string,
  narrative?: string,
  projectId?: { id?: number },
  stageOfInnovation?: { code?: number },
  descriptionStage?: string,
  nextUserOrganizationTypes?: [],
  innovationType?: { code?: number },
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

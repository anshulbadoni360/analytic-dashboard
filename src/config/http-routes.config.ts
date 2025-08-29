import { environment } from "../environments/environment";

export const httpRoutes = {
    generateToken: `${environment.baseAppUrl}/generateToken`,
    getAllSurveys: `${environment.baseAppUrl}/surveys`,
    getSurvey: `${environment.baseAppUrl}/surveys`,
    getSurveyQuestionAnswers: `${environment.baseAppUrl}/survey/questions/answers`,
    postSurveyAnswer: `${environment.baseAppUrl}/survey/questions/answers`,
};

import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, finalize } from "rxjs";
import { httpRoutes } from "../../../../config/http-routes.config";
import { HttpService } from "../http-service/http.service";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
// import { GlobalService } from "../global-service/global.service";
// import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private httpService: HttpService,
    // private globalService: GlobalService,
    // private cookieService: CookieService,
  ) { }

  getAllSurveys(pageNo: Number = 1, pageSize: Number = 10) {
    return this.httpService.get(httpRoutes.getAllSurveys + `?page=${pageNo}&limit=${pageSize}`);
  }
  getSurvey(surveyId: string) {
    return this.httpService.get(httpRoutes.getSurvey + `/${surveyId}`);
  }

  getSurveyQuestionAnswers(qs_id: any) {
    return this.httpService.get(httpRoutes.getSurveyQuestionAnswers + `/${qs_id}`);
  }

  // api.service.ts
  postSurveyAnswer(su_id: string, qs_id: string) {
    console.log(su_id, qs_id, "faefsef");
    return this.httpService.post(httpRoutes.postSurveyAnswer, { su_id, qs_id });
  }

}

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

  getAllSurveys(pageNo: number = 1, pageSize: number = 10) {
    return this.httpService.get(httpRoutes.getAllSurveys + `?page=${pageNo}&limit=${pageSize}`).pipe(
      map((res: any) => {
        if (!res?.surveys) return res;

        // filter duplicate surveys based on title (case insensitive)
        const uniqueData = res.surveys.reduce((acc: any[], curr: any) => {
          const title = curr?.title?.toLowerCase() || "";
          const exists = acc.some((item: any) => item?.title?.toLowerCase() === title);

          if (!exists) {
            acc.push(curr);
          }
          return acc;
        }, []);

        return { ...res, surveys: uniqueData };
      })
    );
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

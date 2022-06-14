import { HttpErrorResponse } from "@angular/common/http";

export default class Utils {
    static showErrors(response: HttpErrorResponse){
        let errors: string[] = [];
        if(Array.isArray(response.error.message)){
          response.error.message.forEach((errorMsg: string) => {
            errors.push(errorMsg);
          });
        }else{
          errors.push(response.error.message)
        }
        return errors;
      }
}
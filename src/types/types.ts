import { Gender } from "../../prisma/generated/type-graphql";

export type ContextType= {
    req: {
      headers: {
        authorization?: string;
      };
    };
    user: UserPayload;
  }
  export type UserPayload= {
    id: string;
    role: string;
  }

  export type PatientFilter ={  
    doctorId: string;  
    gender?: Gender;  
    age?: {  
      gte?: number;  
      lte?: number;  
    };  
  }  
import { AxiosRequestConfig } from "axios";

export interface IPageSchema{
  layout?:Array<any>,
  isFormPage?:boolean,
  refreshAppInfo?:boolean,
  api?:AxiosRequestConfig, 
}

export interface IPage{
  id:number,
  slug:string,
  title?:string, 
  jsonSchema?:IPageSchema,  
}
import { Injectable } from '@angular/core';
import {RequestOptionsArgs, Headers} from '@angular/http';
import { IHttpInterceptor } from '@covalent/http';

@Injectable()
export class RequestInterceptor implements IHttpInterceptor {
  onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    // you add headers or do something before a request here.
    requestOptions.headers=new Headers({
      'X-KeyCloak-Refresh-Token':'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJRZUxEdVc0RThUMFVpU3piX180NUI2NmtWSVpIYklWV0toLWM1UnhyRjRRIn0.eyJqdGkiOiI1ZmViMjRkYi1hZWJiLTQyZmQtYTUwNi1kYjcwZGQ1OWY4MjEiLCJleHAiOjAsIm5iZiI6MCwiaWF0IjoxNDgwMTgyMjIwLCJpc3MiOiJodHRwczovL2Fubm8uZXhiLmRlL2F1dGgvcmVhbG1zL2Nsb3VkLXBsYXRmb3JtIiwiYXVkIjoiY2xvdWQtcGxhdGZvcm0tY2xpZW50Iiwic3ViIjoiOGI2MzcwMzYtMjQ5Mi00N2E3LWE3ODItNmYyYzNhM2NjNTcyIiwidHlwIjoiT2ZmbGluZSIsImF6cCI6ImNsb3VkLXBsYXRmb3JtLWNsaWVudCIsIm5vbmNlIjoiNjEyODVhYTMtNDVlZS00MzAyLWEyNzctZmNiNzNmNTdhZGM1IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiNDNkY2UyNGUtZDBhMC00NjI3LWI0OWMtYWExMGYwNDllMmMwIiwiY2xpZW50X3Nlc3Npb24iOiJkOWQwNzJhMy0wMTQwLTQ4ZmYtYmQ3YS02OWNmY2ZkODMyZjkiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImNsb3VkLXBsYXRmb3JtLWNsaWVudCI6eyJyb2xlcyI6WyJEZXZlbCIsIkppcmEgVXNlciIsIkphYmJlciBVc2VyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50Iiwidmlldy1wcm9maWxlIl19fX0.NM0s4ihENPOv6uC3TRsBNgkJ-pGuZej_x-HKgghntuGD_7amVX40B1aOf-JELX2dyZbtvX_xeb6HwFj4VIVZ2gOE9DEdRa-RD1ZxyzgeW5QriCArav6Vr43CH5KALbjA82J2dXwXKWkTAGxAmSq9izXb6uabyPg9YtghMSpDgDh7LrjxmZrsP3cC8Ho-QAsTF0TaEyWmdcl8h41ngkj_dL_BOLbq9zAPRvDfAGJqhkJx7AVz89YHglIOWEWTLK32NFqBTAxb3ewtr7c4tQJ6oD3VRSrK9Cw-p41ubtcgBfjpOnNdSjoTNjfmdxuM-MHv3DgHnZJQGe6AF4M7D98auQ'

    });
    console.log('requestOptions  ',requestOptions);
    return requestOptions;
  }
}

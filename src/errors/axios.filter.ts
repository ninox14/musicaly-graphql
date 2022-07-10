import { Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { AxiosError } from 'axios';

@Catch(AxiosError)
export class AxiosErrorFilter implements GqlExceptionFilter {
  catch(
    exception: AxiosError<{ message?: string[] | string; statusCode?: number }>,
  ) {
    const { message, statusCode } = exception.response.data;

    const newMessage = Array.isArray(message) ? message[0] : message;
    throw new HttpException(
      newMessage
        ? `Error from microservice: ${newMessage}`
        : 'Something went wrong',
      statusCode || 500,
    );
  }
}

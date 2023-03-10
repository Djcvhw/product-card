import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  async findOne<T>(_: string): Promise<T> {
    const { data } = await this.httpService.axiosRef.get(
      'https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json',
    );
    return data;
  }
}

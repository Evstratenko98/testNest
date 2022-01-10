import { Injectable } from '@nestjs/common';
import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { UpdateBouquetDto } from './dto/update-bouquet.dto';

@Injectable()
export class BouquetService {
  create(createBouquetDto: CreateBouquetDto) {
    return 'This action adds a new bouquet';
  }

  findAll() {
    return `This action returns all bouquet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bouquet`;
  }

  update(id: number, updateBouquetDto: UpdateBouquetDto) {
    return `This action updates a #${id} bouquet`;
  }

  remove(id: number) {
    return `This action removes a #${id} bouquet`;
  }
}

import { Module } from '@nestjs/common';
import { BouquetService } from './bouquet.service';
import { BouquetController } from './bouquet.controller';

@Module({
  controllers: [BouquetController],
  providers: [BouquetService]
})
export class BouquetModule {}

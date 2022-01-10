import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BouquetService } from './bouquet.service';
import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { UpdateBouquetDto } from './dto/update-bouquet.dto';

@Controller('bouquet')
export class BouquetController {
  constructor(private readonly bouquetService: BouquetService) {}

  @Post()
  create(@Body() createBouquetDto: CreateBouquetDto) {
    return this.bouquetService.create(createBouquetDto);
  }

  @Get()
  findAll() {
    return this.bouquetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bouquetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBouquetDto: UpdateBouquetDto) {
    return this.bouquetService.update(+id, updateBouquetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bouquetService.remove(+id);
  }
}

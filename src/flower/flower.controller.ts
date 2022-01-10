import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlowerService } from './flower.service';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';

@Controller('flower')
export class FlowerController {
  constructor(private readonly flowerService: FlowerService) {}

  @Post()
  create(@Body() createFlowerDto: CreateFlowerDto) {
    return this.flowerService.create(createFlowerDto);
  }

  @Get()
  findAll() {
    return this.flowerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlowerDto: UpdateFlowerDto) {
    return this.flowerService.update(+id, updateFlowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowerService.remove(+id);
  }
}

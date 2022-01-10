import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FlowerModule } from './flower/flower.module';
import { BouquetModule } from './bouquet/bouquet.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UsersModule, FlowerModule, BouquetModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

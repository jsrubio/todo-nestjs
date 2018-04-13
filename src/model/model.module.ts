import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import fs = require('fs');

const mongoURI = (!process.env.MONGODB_URI) ? JSON.parse(fs.readFileSync('config.json', 'utf8')).db.uri : process.env.MONGODB_URI;

@Module({
  imports: [
    MongooseModule.forRoot(mongoURI),
  ],
})
export class ModelModule {}

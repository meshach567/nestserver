import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { CacheModule } from "@nestjs/cache-manager";
import { UserModule } from './user/user.module';
import { PlaceModule } from './place/place.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from "@nestjs/graphql";
import { GraphQLUpload } from "graphql-upload-ts";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
    imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        // uploads: {
        //     maxFileSize: 10000000, // 10 MB
        //     maxFiles: 10,
        // },

        driver: ApolloDriver,

    }), CacheModule.register(), ConfigModule.forRoot({ isGlobal: true, cache: true }),
        DatabaseModule,
        AuthModule,
        UserModule,
        PlaceModule,
    ],

    controllers: [],
    providers: [
        {
            provide: 'GraphQLUpload',
            useValue: GraphQLUpload,
        },
    ],


})

export class AppModule { }
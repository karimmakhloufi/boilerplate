import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  content: string;
}

export default Post;

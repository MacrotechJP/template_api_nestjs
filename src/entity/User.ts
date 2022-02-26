import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ comment: 'ユーザーID' })
  readonly id?: number;

  @Column({ name: 'email', comment: 'メールアドレス' })
  email: string;

  @Column({ name: 'password', comment: 'パスワード' })
  password: string;

  @CreateDateColumn({ name: 'created_at', comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', comment: '更新日時' })
  updatedAt: Date;
}

 CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes int DEFAULT 0
);

insert into users (username, name , created_at, updated_at) values('mluukkai@hki.fi', 'Matti Luukkainen', '2017-11-01 00:00:00', '2017-11-01 00:00:00');
insert into users (username, name, created_at, updated_at ) values('kale@hki.fi', 'Kale', '2017-11-01 00:00:00', '2017-11-01 00:00:00');
insert into users (username, name , created_at, updated_at) values('peku@hki.fi', 'Peku', '2017-11-01 00:00:00', '2017-11-01 00:00:00');

insert into blogs (author, url, title,likes, user_id, year, created_at, updated_at) values ('Matti', 'http://timppa.fi', 'Ploki', 100, 1, 2017, '2017-11-01 00:00:00', '2017-11-01 00:00:00');
insert into blogs (author, url, title,likes, user_id, year, created_at, updated_at) values ('Kale', 'http://hellu.fi', 'OhoHupsis', 22, 2, 2017, '2017-11-01 00:00:00', '2017-11-01 00:00:00');
insert into blogs (author, url, title,likes, user_id, year, created_at, updated_at) values ('Peku', 'http://kukkuu.fi', 'Kukkuu', 0, 3, 2017, '2017-11-01 00:00:00', '2017-11-01 00:00:00');
insert into blogs (author, url, title,likes, user_id, year, created_at, updated_at) values ('Matti', 'http://timppa.fi', 'Ploki2', 100,   1, 2018, '2017-11-01 00:00:00', '2017-11-01 00:00:00');

insert into readinglists (user_id, blog_id, read ) values (1, 1, false);
insert into readinglists (user_id, blog_id, read ) values (2, 3, false);
insert into readinglists (user_id, blog_id, read ) values (3, 4, false);
insert into readinglists (user_id, blog_id, read ) values (1, 3, true);
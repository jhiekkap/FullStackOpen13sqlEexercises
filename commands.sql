 CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes int DEFAULT 0
);

insert into blogs (author, url, title,likes ) values ('Soini', 'http://timppa.fi', 'Ploki', 100);
insert into blogs (author, url, title,likes ) values ('Helena', 'http://hellu.fi', 'OhoHupsis', 22);

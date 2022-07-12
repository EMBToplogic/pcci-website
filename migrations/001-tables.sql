-- UP

CREATE TABLE Region (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    areaPresident TEXT,
    regionName TEXT
);

CREATE TABLE Chambers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    regionName TEXT REFERENCES Region(id),
    regionId INTEGER,
    governor TEXT
);

CREATE TABLE Chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapterName TEXT,
    regionName TEXT REFERENCES Chambers(regionName),
    lat INTEGER,
    long INTEGER,
    regionId INTEGER REFERENCES Chambers(id)
);

-- REGIONS

INSERT INTO Region (title, areaPresident, regionName) values ('North Luzon', 'Ms. Gregoria G. Simbulan', 'north-luzon');
INSERT INTO Region (title, areaPresident, regionName) values ('NCR', 'Ms. Teresita L. Ngan Tian', 'ncr');
INSERT INTO Region (title, areaPresident, regionName) values ('South Luzon', 'Ms. Sallie C. Lacson', 'south-luzon');
INSERT INTO Region (title, areaPresident, regionName) values ('Visayas', 'Mr. Franklin A. Carbon', 'visayas');
INSERT INTO Region (title, areaPresident, regionName) values ('Mindanao', 'Mr. Arturo M. Milan', 'mindanao');

-- LOCAL CHAMBERS

INSERT INTO Chambers (regionName, regionId, governor) values ('Cordillera Administrative Region', 'north-luzon', 'Mr. Deimler Cuyan');
INSERT INTO Chambers (regionName, regionId, governor) values ('Region I', 'north-luzon', 'Mr. Pancracio Nisce');
INSERT INTO Chambers (regionName, regionId, governor) values ('Region II', 'north-luzon', 'Mr. Gary Chong');
INSERT INTO Chambers (regionName, regionId, governor) values ('Region III', 'north-luzon', 'Atty. Amalia Cayanan');
INSERT INTO Chambers (regionName, regionId, governor) values ('Region III', 'south-luzon', 'Atty. Amalia Cayanan');

-- CAR

INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('PCCI - Apayao Chapter', 'Cordillera Administrative Region', 0, 0, 1);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('PCCI - Baguio-Benguet Chapter', 'Cordillera Administrative Region', 16.4068579, 120.5960545, 1);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('PCCI - Benguet Chapter', 'Cordillera Administrative Region', 0, 0, 1);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('PCCI - Ifugao Chapter', 'Cordillera Administrative Region', 16.8017878, 121.1159822, 1);

-- REGION I

INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('Chamber of Commerce and Industry - La Union', 'Region I', 16.6181363, 120.3177404, 2);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('Metro Dagupan City Chamber of Commerce and Industry', 'Region I', 16.0376053, 120.3429237, 2);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('PCCI - Ilocos Norte, Inc.', 'Region I', 16.3915485, 119.7068142, 2);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('Vigan City Chamber of Commerce and Industry', 'Region I', 17.5735222, 120.3828189, 2);
INSERT INTO Chapters (chapterName, regionName, lat, long, regionId) values ('Western Pangasinan Chamber of Commerce and Industry', 'Region I', 16.1590373, 119.9787983, 2);

-- DOWN

DROP TABLE Region;
DROP TABLE Chambers;
DROP TABLE Chapters;
--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:5ZA7qpwiLfU5bG8/hPfhvg==$Z8utZIJoiNDqrS3JHRnBNaPPg0xt9K3uLj+lXGn0UdE=:zBgu8xh3GijznBPmduHdECV3EFW54B9K5chkWPwTMV4=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "MAFAD" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: MAFAD; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "MAFAD" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc;


ALTER DATABASE "MAFAD" OWNER TO postgres;

\connect "MAFAD"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: MAFAD; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE "MAFAD" CONNECTION LIMIT = 3;


\connect "MAFAD"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Clients" (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    "phoneNumber" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "lastInvoiceDate" timestamp with time zone NOT NULL,
    gender character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    userid integer,
    "userId" integer
);


ALTER TABLE public."Clients" OWNER TO postgres;

--
-- Name: Clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Clients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Clients_id_seq" OWNER TO postgres;

--
-- Name: Clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Clients_id_seq" OWNED BY public."Clients".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients" ALTER COLUMN id SET DEFAULT nextval('public."Clients_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Clients" (id, "firstName", "lastName", address, city, "phoneNumber", email, "lastInvoiceDate", gender, "createdAt", "updatedAt", userid, "userId") FROM stdin;
17	Al	beh	bou 2		0101010202	test@gmail.com	2024-12-21 17:02:46.256+01	\N	2024-12-21 17:03:35.765+01	2024-12-21 17:03:35.765+01	\N	1
18	LALALALA	BEBEBEBEBEB	ahahahhababbababba		0123456789	addresseMail@GMAIL.com	2024-12-21 17:23:58.647+01	\N	2024-12-21 17:24:31.752+01	2024-12-21 17:24:31.752+01	\N	1
19	Bebouttas	Fritatas	patatas			mabalas@mail.com	2024-12-22 20:45:15.649+01	\N	2024-12-22 20:45:44.099+01	2024-12-22 20:45:44.099+01	\N	1
20	ClientDePaul	NomDuClientDePaul	AddresseDuClientDePaul			mailDuClientDePaul@Paul.fr	2024-12-22 22:02:55.572+01	\N	2024-12-22 22:04:04.107+01	2024-12-22 22:04:04.107+01	\N	7
3	Evan	Everest	789 Mountain St	High Peak	654-321-0987	evan.everest@example.com	2024-06-25 02:00:00+02	\N	2024-11-28 13:51:50.269+01	2024-11-28 13:51:50.269+01	\N	1
4	Daisy	Flower	321 Blossom Blvd	Gardenia	321-654-9870	daisy.flower@example.com	2024-05-20 02:00:00+02	\N	2024-11-28 13:51:57.424+01	2024-11-28 13:51:57.424+01	\N	1
5	Charlie	Chocolate	456 Candy Rd	Sweet City	789-123-4567	charlie.chocolate@example.com	2024-04-15 02:00:00+02	\N	2024-11-28 13:52:01.795+01	2024-11-28 13:52:01.795+01	\N	1
6	Bob	Builder	123 Fixit Ave	Constructville	456-789-0123	bob.builder@example.com	2024-03-05 01:00:00+01	\N	2024-11-28 13:52:05.558+01	2024-11-28 13:52:05.558+01	\N	1
7	Alice	Wonder	789 Pine St	Wonderland	123-987-6543	alice.wonder@example.com	2024-02-10 01:00:00+01	\N	2024-11-28 13:52:09.126+01	2024-11-28 13:52:09.126+01	\N	1
8	Grace	Garden	654 Flora Dr	Greenville	221-334-5566	grace.garden@example.com	2024-08-10 02:00:00+02	false	2024-11-28 13:52:54.619+01	2024-11-28 13:52:54.619+01	\N	1
9	Helen	Heights	321 Hilltop Rd	Summit	334-445-6677	helen.heights@example.com	2024-09-05 02:00:00+02	true	2024-11-28 13:53:06.911+01	2024-11-28 13:53:06.911+01	\N	1
10	Ivan	Ice	987 Glacier St	Frostville	443-556-7788	ivan.ice@example.com	2024-10-20 02:00:00+02	false	2024-11-28 13:53:11.369+01	2024-11-28 13:53:11.369+01	\N	1
11	Jack	Jungle	123 Rainforest Ave	Wildwood	554-667-8899	jack.jungle@example.com	2024-11-15 01:00:00+01	true	2024-11-28 13:53:15.942+01	2024-11-28 13:53:15.942+01	\N	1
12	Kelly	Kingdom	456 Palace Blvd	Regal Town	665-778-9900	kelly.kingdom@example.com	2024-12-05 01:00:00+01	false	2024-11-28 13:53:20.518+01	2024-11-28 13:53:20.518+01	\N	1
13	Alexandrie	Alexandra	18 rue du canarie		0614183945	m@m	2024-11-28 13:53:24.871+01	madame	2024-11-28 13:55:01.753+01	2024-11-28 13:55:01.753+01	\N	1
15	Sabrina	OUI	9 allée de la gourde AMJ GROUPE 35000 RENNES		0777777777	sabrina@gmail.com	2024-11-29 11:54:55.565+01	Madame	2024-11-29 11:56:43.413+01	2024-11-29 11:56:43.413+01	\N	1
21	Adrien	Ausina	QUARTIER LA HORIE		0123456789		2024-12-26 12:08:16.238+01	\N	2024-12-26 12:10:28.312+01	2024-12-26 12:10:28.312+01	\N	1
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, username, password, "createdAt", "updatedAt") FROM stdin;
1	admin	$2a$10$hN8CphwR2y92xbKZAIc2hupFgfGICt1gOUl.KZUIK3VWfnw2e2qVm	2024-12-16 23:48:32.936128+01	2024-12-16 23:50:29.816529+01
3	test	$2a$10$f0hemIFZAydzt3cQc.Os9eNbHWD2mvLYDN46tDrVIJD83R5egAdc.	2024-12-17 00:42:41.199+01	2024-12-17 00:42:41.199+01
7	paul	$2a$10$eBCIznRJA6SYXEyqisZY5O9mkrdmsIMsBaF9.ppHgyFAzkvLxuQKS	2024-12-22 21:50:32.781+01	2024-12-22 21:50:32.782+01
\.


--
-- Name: Clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Clients_id_seq"', 21, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 7, true);


--
-- Name: Clients Clients_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key" UNIQUE (email);


--
-- Name: Clients Clients_email_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key1" UNIQUE (email);


--
-- Name: Clients Clients_email_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key2" UNIQUE (email);


--
-- Name: Clients Clients_email_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key3" UNIQUE (email);


--
-- Name: Clients Clients_email_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key4" UNIQUE (email);


--
-- Name: Clients Clients_email_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key5" UNIQUE (email);


--
-- Name: Clients Clients_email_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key6" UNIQUE (email);


--
-- Name: Clients Clients_email_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_email_key7" UNIQUE (email);


--
-- Name: Clients Clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- Name: Users Users_username_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key1" UNIQUE (username);


--
-- Name: Users Users_username_key10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key10" UNIQUE (username);


--
-- Name: Users Users_username_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key2" UNIQUE (username);


--
-- Name: Users Users_username_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key3" UNIQUE (username);


--
-- Name: Users Users_username_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key4" UNIQUE (username);


--
-- Name: Users Users_username_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key5" UNIQUE (username);


--
-- Name: Users Users_username_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key6" UNIQUE (username);


--
-- Name: Users Users_username_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key7" UNIQUE (username);


--
-- Name: Users Users_username_key8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key8" UNIQUE (username);


--
-- Name: Users Users_username_key9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key9" UNIQUE (username);


--
-- Name: Clients Clients_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id);


--
-- Name: Clients Clients_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_userid_fkey" FOREIGN KEY (userid) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: DATABASE "MAFAD"; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON DATABASE "MAFAD" FROM postgres;
GRANT ALL ON DATABASE "MAFAD" TO postgres WITH GRANT OPTION;


--
-- Name: TABLE "Clients"; Type: ACL; Schema: public; Owner: postgres
--

REVOKE ALL ON TABLE public."Clients" FROM postgres;
GRANT ALL ON TABLE public."Clients" TO postgres WITH GRANT OPTION;


--
-- Name: SEQUENCE "Clients_id_seq"; Type: ACL; Schema: public; Owner: postgres
--

REVOKE ALL ON SEQUENCE public."Clients_id_seq" FROM postgres;
GRANT ALL ON SEQUENCE public."Clients_id_seq" TO postgres WITH GRANT OPTION;


--
-- Name: TABLE "Users"; Type: ACL; Schema: public; Owner: postgres
--

REVOKE ALL ON TABLE public."Users" FROM postgres;
GRANT ALL ON TABLE public."Users" TO postgres WITH GRANT OPTION;


--
-- Name: SEQUENCE "Users_id_seq"; Type: ACL; Schema: public; Owner: postgres
--

REVOKE ALL ON SEQUENCE public."Users_id_seq" FROM postgres;
GRANT ALL ON SEQUENCE public."Users_id_seq" TO postgres WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


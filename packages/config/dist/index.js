"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfig = void 0;
const env_var_1 = require("env-var");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const env = (0, env_var_1.from)(process.env);
const file = ".env";
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../..", file) });
exports.EnvConfig = {
    DEVELOPMENT: process.env.NODE_ENV == 'development',
    // Domains
    API_BASEURL: env.get("API_BASEURL").required().asString(),
    // Database
    DATABASE_TYPE: env.get("DATABASE_TYPE").default("mysql").asString(),
    DATABASE_HOST: env.get("DATABASE_HOST").default("127.0.0.1").asString(),
    DATABASE_PORT: env.get("DATABASE_PORT").default(3306).asPortNumber(),
    DATABASE_USER: env.get("DATABASE_USER").asString(),
    DATABASE_PASSWORD: env.get("DATABASE_PASSWORD").asString(),
    DATABASE_NAME: env.get("DATABASE_NAME").required().asString(),
    // Redis
    REDIS_HOST: env.get("REDIS_HOST").default("127.0.0.1").asString(),
    REDIS_PORT: env.get("REDIS_PORT").default(6379).asPortNumber(),
    REDIS_PASSWORD: env.get("REDIS_PASSWORD").asString(),
};
//# sourceMappingURL=index.js.map
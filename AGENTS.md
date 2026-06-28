# Backend AI Rules
- **Do Not Modify:** Do not alter the core database connection logic in `config/` unless explicitly asked.
- **Architectural Constraints:** Always keep business logic inside the Controllers. Do not attempt to abstract controllers into hooks or front-end paradigms.
- **Package Management:** Always use `npm install`, never `pnpm` or `yarn`.
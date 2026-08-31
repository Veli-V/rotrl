# Rise of the Runelords - Agent Instructions & Architecture

This repository uses a modular, tool-agnostic multi-agent architecture for processing Pathfinder session notes and maintaining the campaign wiki.

## Master Workflow & Agent Prompts

When asked to process a new session, follow the master workflow in [.agents/workflows/process_session.md](file:///.agents/workflows/process_session.md).

### Specialized Subagents / Pipeline Steps:
1. **OCR & Transcription:** [.agents/prompts/01_ocr_transcriber.md](file:///.agents/prompts/01_ocr_transcriber.md)
   - Transcribes raw PDFs/images from `00_Raw/` to `00_Raw/sessio_X_raw.md`.
2. **Session Editor:** [.agents/prompts/02_session_editor.md](file:///.agents/prompts/02_session_editor.md)
   - Cleans raw text into `content/01_Sessions/Sessio X - [Otsikko].md`, fixes lore names (Nualia -> Nelli), and adds `[[Wikilinks]]`.
3. **World & Lore Updater:** [.agents/prompts/03_world_updater.md](file:///.agents/prompts/03_world_updater.md)
   - Cross-references and updates `content/02_World/` entries (NPCs, Locations, Monsters, Lore, Timeline, and Player Character highlights).
4. **Wiki Search & Knowledge Retrieval Agent:** [.agents/prompts/04_search_agent.md](file:///.agents/prompts/04_search_agent.md)
   - Responds to user lore queries (e.g. `haku-agentti Makkara`) by searching indexes and wiki pages, presenting summaries, and handling follow-up questions.

## Key Conventions
- **Language:** Finnish.
- **Wikilinks:** `[[PageName]]` format. Link only the first mention per page.
- **Primary Truth:** Game Master appendix notes (`GM_appendix`) override player notes if conflicts arise.

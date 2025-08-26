# EX - Task Manager Avanzato

## Descrizione
Task Manager Avanzato è una web app che permette agli utenti di creare, modificare, organizzare ed eliminare task in modo intuitivo ed efficiente. L'app supporta filtri avanzati, ricerca ottimizzata, ordinamento e conferme di azione tramite modali, garantendo un'esperienza fluida e prestazioni ottimizzate.

---

## Milestone

### 1. Setup e Routing
- Clona il backend: [react-task-manager-back](https://github.com/boolean-it/react-task-manager-back)
- Avvia il server:
  ```sh
  npm install
  npm run start
  ```

- Imposta il frontend con Vite e configura il routing con react-router-dom.
- Crea le pagine principali:
    - TaskList.jsx: elenco dei task
    - AddTask.jsx: form per aggiungere un nuovo task
    - Aggiungi una barra di navigazione con NavLink.
### 2. Context API e Fetch Iniziale
- Salva l'URL dell'API nel file .env.
- Crea un Context API (GlobalContext) per gestire lo stato globale.
- Recupera la lista dei task con una richiesta GET a /tasks.
### 3. Lista dei Task
- Visualizza i task in una tabella con colonne: Nome, Stato, Data di Creazione.
- Crea il componente TaskRow.jsx.
- Applica colori di sfondo diversi alla colonna status.
- Usa React.memo() per ottimizzare il rendering.
### 4. Custom Hook useTasks() (GET)
- Crea un hook useTasks() per gestire i task e le funzioni addTask, removeTask, updateTask.
- Integra useTasks() nel GlobalContext.
### 5. Form per Aggiungere un Task
- Crea un form in AddTask.jsx con:
    - Nome (input controllato)
    - Descrizione (textarea non controllata)
    - Stato (select non controllata)
- Valida il campo Nome (no vuoto, no simboli speciali).
### 6. Integrazione API per Aggiungere un Task (POST)
- Completa la funzione addTask in useTasks().
- Gestisci la risposta dell'API e aggiorna lo stato globale.
### 7. Pagina Dettaglio Task
- Crea TaskDetail.jsx per mostrare i dettagli di un task.
- Rendi il titolo un link a /task/:id.
- Aggiungi bottone "Elimina Task".
### 8. Funzione di Eliminazione Task (DELETE)
- Completa la funzione removeTask in useTasks().
- Gestisci l'eliminazione dalla pagina di dettaglio.
### 9. Componente Modal e Conferma Eliminazione
- Crea Modal.jsx riutilizzabile.
- Integra la modale per confermare l'eliminazione.
### 10. Modale e Funzione di Modifica Task (PUT)
- Completa la funzione updateTask in useTasks().
- Crea EditTaskModal.jsx per modificare i dettagli di un task.
### 11. Ordinamento delle Task
- Implementa ordinamento per titolo, stato, data di creazione in TaskList.jsx.
- Usa useMemo() per ottimizzare.
### 12. Ricerca dei Task con Debounce
- Aggiungi campo di ricerca con debounce in TaskList.jsx.
- Filtra e ordina i task in base alla ricerca.
### 🎯 BONUS
1. Selezione ed Eliminazione Multipla
- Supporta selezione multipla e cancellazione di task.
- Implementa removeMultipleTasks in useTasks.js.
2. Funzionalità Aggiuntive
- Usa dayjs per formattare le date.
- Impedisci la creazione/modifica di task con nomi duplicati.
- Gestisci lo stato dei task con useReducer e un file tasksReducer.js.
---

### Avvio del progetto

Backend
```sh
git clone https://github.com/boolean-it/react-task-manager-back
cd react-task-manager-back
npm install
npm run start

```
Frontend

```sh
npm install
npm run dev

```
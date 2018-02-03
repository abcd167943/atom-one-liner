'use babel';

import { CompositeDisposable } from 'atom';
import OneLiner from './one-liner';

const main = {
  subscriptions: null,
  activate(state) {
    this.subscriptions = new CompositeDisposable;
    return this.subscriptions.add(atom.commands.add('atom-workspace', {
      'one-liner:run': () => this.run()
    }));
  },
  deactivate() {
    return this.subscriptions.dispose();
  },
  run() {
    const editor = atom.workspace.getActivePaneItem();
    const range = editor.getSelectedBufferRange();
    let text = editor.getSelectedText();
    if (!(text.length > 0)) {
      return;
    }
    text = OneLiner(text);
    editor.setTextInBufferRange(range, text);
    return editor.autoIndentSelectedRows();
  }
};

export default main;

SEMIEventBus = (() => {
  /**
   * @typedef {HandleAddItemToBankPre: function, HandleAddItemToBankPost: function} AddItemToBankHandler
   */

  /**
   * @type {AddItemToBankHandler[]}
   */
  const _addItemToBankHandlers = [];
  const RegisterAddItemToBankHandler = (handler) => {
    _addItemToBankHandlers.push(handler);
  };

  const AddItemToBankPre = (itemID, quantity, found = true, showNotification = true) => {
    for (var handler of _addItemToBankHandlers) {
      try {
        if (
          handler.HandleAddItemToBankPre &&
          handler.HandleAddItemToBankPre(itemID, quantity, found, showNotification)
        ) {
          return true;
        }
      } catch (e) {
        console.error(`SEMI: ItemHandler Failed.`);
        console.error(e);
      }
    }
  };

  const AddItemToBankPost = (itemID, quantity, found = true, showNotification = true) => {
    for (var handler of _addItemToBankHandlers) {
      try {
        if (handler.HandleAddItemToBankPost) {
          handler.HandleAddItemToBankPost(itemID, quantity, found, showNotification);
        }
      } catch (e) {
        console.error(`SEMI: ItemHandler Failed.`);
        console.error(e);
      }
    }
  };

  return { AddItemToBankPost, AddItemToBankPre, RegisterAddItemToBankHandler };
})();

function inventory(list) {
    let collectingItems = list.shift().split(', ');
    let command = list.shift();

    while (command != 'Craft!') {

        let [followingCommand, item] = command.split(' - ');

        switch (followingCommand) {
            case 'Collect':
                if (!collectingItems.includes(item)) {
                    collectingItems.push(item);
                }
                break;
            case 'Drop':
                if (collectingItems.includes(item)) {
                    let index = collectingItems.indexOf(item);
                    collectingItems.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if (collectingItems.includes(oldItem)) {
                    let indexOfOldItem = collectingItems.indexOf(oldItem);
                    collectingItems.splice(indexOfOldItem + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (collectingItems.includes(item)) {
                    let indexOfItem = collectingItems.indexOf(item);
                    let renewItem = collectingItems.splice(indexOfItem, 1);
                    collectingItems.push(renewItem);

                }

                break;

            default:
                break;
        }

        command = list.shift();
    }
    console.log(collectingItems.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])
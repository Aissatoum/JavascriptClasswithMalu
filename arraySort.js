var prev, next;
var enter = [5];
for (i = 0; i < 5; i++) {
    enter[i] = prompt('enter 5 different number', '');
}
    for (i = 0; i < 5; i++) {
        for (j = i + 1; j < 5; j++) {
            if (enter[i] > enter[j]) {
                var temp = enter[i];
                enter[i] = enter[j];
                enter[j] = temp;
            }
        }
    }
for (i = 0; i < 5; i++) {
    document.write(enter[i] + " ");
}
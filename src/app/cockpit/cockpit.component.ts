import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component
({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.scss']
})

export class CockpitComponent implements OnInit
{

    @Output() taskText = new EventEmitter<{ id: number, text: string, isDone: boolean }>();
    @Output() clearTasks = new EventEmitter<{ flag: boolean }>();
    @ViewChild('inputElementRef') inputElementRef: ElementRef;

    constructor() {}

    ngOnInit(): void {}

    sendData(data: { text: string })
    {
        if (data.text)
        {
            this.taskText.emit({ id: 0, text: data.text, isDone: false });
            this.inputElementRef.nativeElement.value = '';
        } else
        {
            alert('Input box cannot be empty!');
        }

        this.inputElementRef.nativeElement.focus();
    }

    clearAll()
    {
        this.clearTasks.emit({ flag: true });
    }
}

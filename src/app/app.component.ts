import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '01_piano';

  playSound(note: string){
    const audio = new Audio(`../assets/sounds/${note}.wav`);
    audio.load();
    audio.play();
  }
}

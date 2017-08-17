import { NgModule } from '@angular/core';
import { TruncatePipeComponent } from "./truncate.pipe";

@NgModule({
  declarations:[TruncatePipeComponent],
  exports:[TruncatePipeComponent]
})

export class TruncatePipe{}
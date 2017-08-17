import { Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipeComponent {
  transform(value: string, args: string) : string {
    let limit = args.length > 0 ? parseInt(args) : 10;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
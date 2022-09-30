import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseServerService } from 'src/app/components/version1/backend/resources/database-server/database-server.service';
import { DatabaseServer } from 'src/app/components/version1/models/database-server-model';
import { Toastr, TOASTR_TOKEN } from "src/app/toastr.service";

@Component({
  selector: 'app-create-database-server-v2',
  templateUrl: './create-database-server-v2.component.html',
  styleUrls: ['./create-database-server-v2.component.scss']
})
export class CreateDatabaseServerV2Component implements OnInit {

  dbServer!: DatabaseServer;
  dbServerId: any;
  mode?: string
  constructor(private router: Router, private dbService: DatabaseServerService, private activatedRoute: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    this.mode = '';
    this.dbServer = {};
  }



  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.dbServerId = params["id"]
      })
    if (this.dbServerId) {
      this.mode = 'edit'
      this.dbService.get(this.dbServerId)
        .subscribe(res => {
          if (res) {
            this.dbServer.name = res.name,
              this.dbServer.connectionString = res.connectionString
          }
        })
    }
    else {
      this.mode = 'create'
    }
  }


  saveDbServer() {
    if (this.mode === 'create') {
      this.dbService.create(this.dbServer)
        .subscribe(res => {
          this.toastr.success("Database saved")
          window.history.back()
        }, err => {
          this.toastr.error("Name already taken.", "Error");
        })
    }
    else if (this.mode === 'edit') {
      this.dbService.update(this.dbServerId, this.dbServer)
        .subscribe(res => {
          window.history.back();
        })
    }
  }


}

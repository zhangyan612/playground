// openFile(event) {
//     let input = event.target;
//     for (var index = 0; index < input.files.length; index++) {
//         let reader = new FileReader();
//         reader.onload = () => {
//             // this 'text' is the content of the file
//             var text = reader.result;
//         }
//         reader.readAsText(input.files[index]);
//     };
// }

// controller class:
uploadFile(): void {
    var filePathInput: any = $("#filePath");
    if (filePathInput[0].files) {
        var file: any = filePathInput[0].files[0];
        var resource: any = this.service.uploadFile();
        resource.save(file, (result: any) => {
            if (!result || !result.success) {
                alert("error");
            } else {
                alert("ok");
            }
        });
    }
}

// service class:
uploadFile(): ng.resource.IResourceClass<IMyResource> {
    return this.$resource("/MyController/UploadImage", null, { method: "POST" });
}

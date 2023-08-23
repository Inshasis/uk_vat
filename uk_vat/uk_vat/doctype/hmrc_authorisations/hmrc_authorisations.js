// Copyright (c) 2023 InshaSiS Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('HMRC Authorisations', {

	request_authorisations: function(frm) {

		frappe.call({
			method: "uk_vat.uk_vat.doctype.hmrc_authorisations.hmrc_authorisations.authorize_access",
			args: {
				name : frm.doc.name,
			},
			callback: function(r) {
				if (!r.exc) {
					frm.save();
					window.open(r.message.url);
				}
			}
		});
	}
});

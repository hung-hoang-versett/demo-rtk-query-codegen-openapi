import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://submittable-api.submittable.com",
  }),
  tagTypes: [],
  endpoints: (build) => ({
    postV3Requests: build.mutation<
      PostV3RequestsApiResponse,
      PostV3RequestsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/requests`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postV3RequestsAdditional: build.mutation<
      PostV3RequestsAdditionalApiResponse,
      PostV3RequestsAdditionalApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/requests/additional`,
        method: "POST",
        body: queryArg.createAdditionalFormRequestRequest,
      }),
    }),
    postV3Responses: build.mutation<
      PostV3ResponsesApiResponse,
      PostV3ResponsesApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getV3ResponsesByFormResponseId: build.query<
      GetV3ResponsesByFormResponseIdApiResponse,
      GetV3ResponsesByFormResponseIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses/${queryArg.formResponseId}`,
      }),
    }),
    putV3ResponsesByFormResponseId: build.mutation<
      PutV3ResponsesByFormResponseIdApiResponse,
      PutV3ResponsesByFormResponseIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses/${queryArg.formResponseId}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteV3ResponsesByFormResponseId: build.mutation<
      DeleteV3ResponsesByFormResponseIdApiResponse,
      DeleteV3ResponsesByFormResponseIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses/${queryArg.formResponseId}`,
        method: "DELETE",
      }),
    }),
    getV3ResponsesByFormResponseIdTablesAndTableId: build.query<
      GetV3ResponsesByFormResponseIdTablesAndTableIdApiResponse,
      GetV3ResponsesByFormResponseIdTablesAndTableIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses/${queryArg.formResponseId}/tables/${queryArg.tableId}`,
      }),
    }),
    getV3ResponsesByFormResponseIdFilesAndFileId: build.query<
      GetV3ResponsesByFormResponseIdFilesAndFileIdApiResponse,
      GetV3ResponsesByFormResponseIdFilesAndFileIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses/${queryArg.formResponseId}/files/${queryArg.fileId}`,
      }),
    }),
    getV3ResponsesFormsByFormId: build.query<
      GetV3ResponsesFormsByFormIdApiResponse,
      GetV3ResponsesFormsByFormIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/responses/forms/${queryArg.formId}`,
        params: { page: queryArg.page, pageSize: queryArg.pageSize },
      }),
    }),
    getV3FormsByFormId: build.query<
      GetV3FormsByFormIdApiResponse,
      GetV3FormsByFormIdApiArg
    >({
      query: (queryArg) => ({ url: `/v3/forms/${queryArg.formId}` }),
    }),
    putV3FormsByFormId: build.mutation<
      PutV3FormsByFormIdApiResponse,
      PutV3FormsByFormIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/forms/${queryArg.formId}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteV3FormsByFormId: build.mutation<
      DeleteV3FormsByFormIdApiResponse,
      DeleteV3FormsByFormIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/forms/${queryArg.formId}`,
        method: "DELETE",
      }),
    }),
    getV3Forms: build.query<GetV3FormsApiResponse, GetV3FormsApiArg>({
      query: (queryArg) => ({
        url: `/v3/forms`,
        params: {
          type: queryArg["type"],
          projectId: queryArg.projectId,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    postV3Forms: build.mutation<PostV3FormsApiResponse, PostV3FormsApiArg>({
      query: (queryArg) => ({
        url: `/v3/forms`,
        method: "POST",
        body: queryArg.createFormRequest,
      }),
    }),
    putV3Reviews: build.mutation<PutV3ReviewsApiResponse, PutV3ReviewsApiArg>({
      query: (queryArg) => ({
        url: `/v3/reviews`,
        method: "PUT",
        body: queryArg.updateReviewScoreRequest,
      }),
    }),
    deleteV3ReviewsByReviewResponseId: build.mutation<
      DeleteV3ReviewsByReviewResponseIdApiResponse,
      DeleteV3ReviewsByReviewResponseIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/reviews/${queryArg.reviewResponseId}`,
        method: "DELETE",
      }),
    }),
    postV3Funds: build.mutation<PostV3FundsApiResponse, PostV3FundsApiArg>({
      query: (queryArg) => ({
        url: `/v3/funds`,
        method: "POST",
        body: queryArg.createFundRequest,
      }),
    }),
    getV3Funds: build.query<GetV3FundsApiResponse, GetV3FundsApiArg>({
      query: (queryArg) => ({
        url: `/v3/funds`,
        params: { page: queryArg.page, pageSize: queryArg.pageSize },
      }),
    }),
    getV3FundsByFundId: build.query<
      GetV3FundsByFundIdApiResponse,
      GetV3FundsByFundIdApiArg
    >({
      query: (queryArg) => ({ url: `/v3/funds/${queryArg.fundId}` }),
    }),
    putV3FundsByFundId: build.mutation<
      PutV3FundsByFundIdApiResponse,
      PutV3FundsByFundIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/funds/${queryArg.fundId}`,
        method: "PUT",
        body: queryArg.updateFundRequest,
      }),
    }),
    deleteV3FundsByFundId: build.mutation<
      DeleteV3FundsByFundIdApiResponse,
      DeleteV3FundsByFundIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/funds/${queryArg.fundId}`,
        method: "DELETE",
      }),
    }),
    postV3Transactions: build.mutation<
      PostV3TransactionsApiResponse,
      PostV3TransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/transactions`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getV3Transactions: build.query<
      GetV3TransactionsApiResponse,
      GetV3TransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/transactions`,
        params: {
          page: queryArg.page,
          pageSize: queryArg.pageSize,
          fundId: queryArg.fundId,
          status: queryArg.status,
          startDate: queryArg.startDate,
          endDate: queryArg.endDate,
          submitterId: queryArg.submitterId,
          submissionId: queryArg.submissionId,
        },
      }),
    }),
    getV3TransactionsByTransactionId: build.query<
      GetV3TransactionsByTransactionIdApiResponse,
      GetV3TransactionsByTransactionIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/transactions/${queryArg.transactionId}`,
      }),
    }),
    putV3TransactionsByTransactionId: build.mutation<
      PutV3TransactionsByTransactionIdApiResponse,
      PutV3TransactionsByTransactionIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/transactions/${queryArg.transactionId}`,
        method: "PUT",
        body: queryArg.updateTransactionRequest,
      }),
    }),
    deleteV3TransactionsByTransactionId: build.mutation<
      DeleteV3TransactionsByTransactionIdApiResponse,
      DeleteV3TransactionsByTransactionIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/transactions/${queryArg.transactionId}`,
        method: "DELETE",
      }),
    }),
    postV3TransactionsByTransactionIdSend: build.mutation<
      PostV3TransactionsByTransactionIdSendApiResponse,
      PostV3TransactionsByTransactionIdSendApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/transactions/${queryArg.transactionId}/send`,
        method: "POST",
        body: queryArg.sendFundsRequest,
      }),
    }),
    getV3Labels: build.query<GetV3LabelsApiResponse, GetV3LabelsApiArg>({
      query: (queryArg) => ({
        url: `/v3/labels`,
        params: { page: queryArg.page, pageSize: queryArg.pageSize },
      }),
    }),
    postV3Labels: build.mutation<PostV3LabelsApiResponse, PostV3LabelsApiArg>({
      query: (queryArg) => ({
        url: `/v3/labels`,
        method: "POST",
        body: queryArg.createLabelRequest,
      }),
    }),
    postV3LabelsList: build.mutation<
      PostV3LabelsListApiResponse,
      PostV3LabelsListApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/labels/list`,
        method: "POST",
        body: queryArg.getLabelsRequest,
      }),
    }),
    getV3LabelsByLabelId: build.query<
      GetV3LabelsByLabelIdApiResponse,
      GetV3LabelsByLabelIdApiArg
    >({
      query: (queryArg) => ({ url: `/v3/labels/${queryArg.labelId}` }),
    }),
    putV3LabelsByLabelId: build.mutation<
      PutV3LabelsByLabelIdApiResponse,
      PutV3LabelsByLabelIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/labels/${queryArg.labelId}`,
        method: "PUT",
        body: queryArg.updateLabelRequest,
      }),
    }),
    deleteV3LabelsByLabelId: build.mutation<
      DeleteV3LabelsByLabelIdApiResponse,
      DeleteV3LabelsByLabelIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/labels/${queryArg.labelId}`,
        method: "DELETE",
      }),
    }),
    getV3OrganizationsTeamAssignments: build.query<
      GetV3OrganizationsTeamAssignmentsApiResponse,
      GetV3OrganizationsTeamAssignmentsApiArg
    >({
      query: () => ({ url: `/v3/organizations/team/assignments` }),
    }),
    postV3OrganizationsTeamList: build.mutation<
      PostV3OrganizationsTeamListApiResponse,
      PostV3OrganizationsTeamListApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/organizations/team/list`,
        method: "POST",
        body: queryArg.getTeamMembersRequest,
      }),
    }),
    getV3OrganizationsTeamInvites: build.query<
      GetV3OrganizationsTeamInvitesApiResponse,
      GetV3OrganizationsTeamInvitesApiArg
    >({
      query: () => ({ url: `/v3/organizations/team/invites` }),
    }),
    getV3Projects: build.query<GetV3ProjectsApiResponse, GetV3ProjectsApiArg>({
      query: (queryArg) => ({
        url: `/v3/projects`,
        params: { page: queryArg.page, pageSize: queryArg.pageSize },
      }),
    }),
    postV3Projects: build.mutation<
      PostV3ProjectsApiResponse,
      PostV3ProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/projects`,
        method: "POST",
        body: queryArg.createProjectRequest,
      }),
    }),
    getV3ProjectsByProjectId: build.query<
      GetV3ProjectsByProjectIdApiResponse,
      GetV3ProjectsByProjectIdApiArg
    >({
      query: (queryArg) => ({ url: `/v3/projects/${queryArg.projectId}` }),
    }),
    putV3ProjectsByProjectId: build.mutation<
      PutV3ProjectsByProjectIdApiResponse,
      PutV3ProjectsByProjectIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/projects/${queryArg.projectId}`,
        method: "PUT",
        body: queryArg.updateProjectRequest,
      }),
    }),
    putV3ProjectsStagesByReviewStageId: build.mutation<
      PutV3ProjectsStagesByReviewStageIdApiResponse,
      PutV3ProjectsStagesByReviewStageIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/projects/stages/${queryArg.reviewStageId}`,
        method: "PUT",
        body: queryArg.updateReviewStageRequest,
      }),
    }),
    getV3ProjectsStagesByReviewStageId: build.query<
      GetV3ProjectsStagesByReviewStageIdApiResponse,
      GetV3ProjectsStagesByReviewStageIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/projects/stages/${queryArg.reviewStageId}`,
      }),
    }),
    deleteV3ProjectsStagesByReviewStageId: build.mutation<
      DeleteV3ProjectsStagesByReviewStageIdApiResponse,
      DeleteV3ProjectsStagesByReviewStageIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/projects/stages/${queryArg.reviewStageId}`,
        method: "DELETE",
      }),
    }),
    postV3ProjectsByProjectIdStages: build.mutation<
      PostV3ProjectsByProjectIdStagesApiResponse,
      PostV3ProjectsByProjectIdStagesApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/projects/${queryArg.projectId}/stages`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postV3Submissions: build.mutation<
      PostV3SubmissionsApiResponse,
      PostV3SubmissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getV3Submissions: build.query<
      GetV3SubmissionsApiResponse,
      GetV3SubmissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions`,
        params: {
          page: queryArg.page,
          pageSize: queryArg.pageSize,
          Search: queryArg.search,
          "Projects.Include": queryArg["Projects.Include"],
          "Projects.Exclude": queryArg["Projects.Exclude"],
          "LegacyProjects.Include": queryArg["LegacyProjects.Include"],
          "LegacyProjects.Exclude": queryArg["LegacyProjects.Exclude"],
          "Statuses.Include": queryArg["Statuses.Include"],
          "Statuses.Exclude": queryArg["Statuses.Exclude"],
          Reviewers: queryArg.reviewers,
          ArchivedStatus: queryArg.archivedStatus,
          "Labels.IncludeAny": queryArg["Labels.IncludeAny"],
          "Labels.IncludeAll": queryArg["Labels.IncludeAll"],
          "Labels.IncludeUnlabeled": queryArg["Labels.IncludeUnlabeled"],
          "Labels.ExcludeAny": queryArg["Labels.ExcludeAny"],
          "Labels.ExcludeAll": queryArg["Labels.ExcludeAll"],
          "Labels.ExcludeUnlabeled": queryArg["Labels.ExcludeUnlabeled"],
          DateFrom: queryArg.dateFrom,
          DateTo: queryArg.dateTo,
          AdditionalFormStatuses: queryArg.additionalFormStatuses,
          ReviewStatus: queryArg.reviewStatus,
          "ReviewStages.Include": queryArg["ReviewStages.Include"],
          "ReviewStages.Exclude": queryArg["ReviewStages.Exclude"],
          "SortBy.Field": queryArg["SortBy.Field"],
          "SortBy.Order": queryArg["SortBy.Order"],
        },
      }),
    }),
    getV3SubmissionsBySubmissionId: build.query<
      GetV3SubmissionsBySubmissionIdApiResponse,
      GetV3SubmissionsBySubmissionIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}`,
      }),
    }),
    deleteV3SubmissionsBySubmissionId: build.mutation<
      DeleteV3SubmissionsBySubmissionIdApiResponse,
      DeleteV3SubmissionsBySubmissionIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}`,
        method: "DELETE",
      }),
    }),
    putV3SubmissionsBySubmissionIdStageAndStageId: build.mutation<
      PutV3SubmissionsBySubmissionIdStageAndStageIdApiResponse,
      PutV3SubmissionsBySubmissionIdStageAndStageIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/stage/${queryArg.stageId}`,
        method: "PUT",
      }),
    }),
    getV3SubmissionsHistory: build.query<
      GetV3SubmissionsHistoryApiResponse,
      GetV3SubmissionsHistoryApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/history`,
        params: {
          submissionId: queryArg.submissionId,
          userId: queryArg.userId,
          historyTypeId: queryArg.historyTypeId,
          bulkActionTaskId: queryArg.bulkActionTaskId,
          page: queryArg.page,
          pageSize: queryArg.pageSize,
        },
      }),
    }),
    postV3SubmissionsAssignmentsList: build.mutation<
      PostV3SubmissionsAssignmentsListApiResponse,
      PostV3SubmissionsAssignmentsListApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/assignments/list`,
        method: "POST",
        body: queryArg.submissionIdsBaseRequest,
      }),
    }),
    getV3SubmissionsBySubmissionIdReviews: build.query<
      GetV3SubmissionsBySubmissionIdReviewsApiResponse,
      GetV3SubmissionsBySubmissionIdReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/reviews`,
        params: { reviewStageId: queryArg.reviewStageId },
      }),
    }),
    putV3SubmissionsBySubmissionIdLabelsAndLabelId: build.mutation<
      PutV3SubmissionsBySubmissionIdLabelsAndLabelIdApiResponse,
      PutV3SubmissionsBySubmissionIdLabelsAndLabelIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/labels/${queryArg.labelId}`,
        method: "PUT",
      }),
    }),
    deleteV3SubmissionsBySubmissionIdLabelsAndLabelId: build.mutation<
      DeleteV3SubmissionsBySubmissionIdLabelsAndLabelIdApiResponse,
      DeleteV3SubmissionsBySubmissionIdLabelsAndLabelIdApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/labels/${queryArg.labelId}`,
        method: "DELETE",
      }),
    }),
    putV3SubmissionsBySubmissionIdStatus: build.mutation<
      PutV3SubmissionsBySubmissionIdStatusApiResponse,
      PutV3SubmissionsBySubmissionIdStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/status`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    putV3SubmissionsBySubmissionIdArchive: build.mutation<
      PutV3SubmissionsBySubmissionIdArchiveApiResponse,
      PutV3SubmissionsBySubmissionIdArchiveApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/archive`,
        method: "PUT",
      }),
    }),
    putV3SubmissionsBySubmissionIdUnarchive: build.mutation<
      PutV3SubmissionsBySubmissionIdUnarchiveApiResponse,
      PutV3SubmissionsBySubmissionIdUnarchiveApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/unarchive`,
        method: "PUT",
      }),
    }),
    postV3SubmissionsBySubmissionIdNotes: build.mutation<
      PostV3SubmissionsBySubmissionIdNotesApiResponse,
      PostV3SubmissionsBySubmissionIdNotesApiArg
    >({
      query: (queryArg) => ({
        url: `/v3/submissions/${queryArg.submissionId}/notes`,
        method: "POST",
        body: queryArg.addNoteToSubmissionRequest,
      }),
    }),
  }),
});
export type PostV3RequestsApiResponse =
  | /** status 201 Created form request */ ({
      formType: "internal";
    } & InternalFormRequestResponse)
  | ({
      formType: "additional";
    } & AdditionalFormRequestResponse)
  | ({
      formType: "review";
    } & ReviewFormRequestResponse);
export type PostV3RequestsApiArg = {
  body:
    | (
        | ({
            formType: "review";
          } & CreateReviewFormRequestRequest)
        | ({
            formType: "internal";
          } & CreateInternalFormRequestRequest)
        | ({
            formType: "CreateAdditionalFormRequestRequest";
          } & CreateAdditionalFormRequestRequest)
      )
    | null;
};
export type PostV3RequestsAdditionalApiResponse =
  /** status 201 Created additional form request */ AdditionalFormRequestResponse;
export type PostV3RequestsAdditionalApiArg = {
  createAdditionalFormRequestRequest: CreateAdditionalFormRequestRequest;
};
export type PostV3ResponsesApiResponse =
  | /** status 201 Created */ ({
      formType: "initial";
    } & InitialFormResponseResponse)
  | ({
      formType: "additional";
    } & AdditionalFormResponseResponse)
  | ({
      formType: "reference";
    } & ReferenceFormResponseResponse)
  | ({
      formType: "review";
    } & ReviewFormResponseResponse)
  | ({
      formType: "eligibility";
    } & EligibilityFormResponseResponse)
  | ({
      formType: "internal";
    } & InternalFormResponseResponse);
export type PostV3ResponsesApiArg = {
  body:
    | ({
        formType: "internal";
      } & CreateInternalFormResponseRequest)
    | null;
};
export type GetV3ResponsesByFormResponseIdApiResponse =
  | /** status 200 Found */ ({
      formType: "initial";
    } & InitialFormResponseResponse)
  | ({
      formType: "additional";
    } & AdditionalFormResponseResponse)
  | ({
      formType: "reference";
    } & ReferenceFormResponseResponse)
  | ({
      formType: "review";
    } & ReviewFormResponseResponse)
  | ({
      formType: "eligibility";
    } & EligibilityFormResponseResponse)
  | ({
      formType: "internal";
    } & InternalFormResponseResponse);
export type GetV3ResponsesByFormResponseIdApiArg = {
  formResponseId: string;
};
export type PutV3ResponsesByFormResponseIdApiResponse =
  | /** status 200 Updated */ ({
      formType: "initial";
    } & InitialFormResponseResponse)
  | ({
      formType: "additional";
    } & AdditionalFormResponseResponse)
  | ({
      formType: "reference";
    } & ReferenceFormResponseResponse)
  | ({
      formType: "review";
    } & ReviewFormResponseResponse)
  | ({
      formType: "eligibility";
    } & EligibilityFormResponseResponse)
  | ({
      formType: "internal";
    } & InternalFormResponseResponse);
export type PutV3ResponsesByFormResponseIdApiArg = {
  formResponseId: string | null;
  body:
    | ({
        formType: "internal";
      } & UpdateInternalFormResponseRequest)
    | null;
};
export type DeleteV3ResponsesByFormResponseIdApiResponse =
  /** status 204 Deleted */ undefined;
export type DeleteV3ResponsesByFormResponseIdApiArg = {
  formResponseId: string;
};
export type GetV3ResponsesByFormResponseIdTablesAndTableIdApiResponse =
  /** status 200 Found */ GetUrlResponse;
export type GetV3ResponsesByFormResponseIdTablesAndTableIdApiArg = {
  formResponseId: string | null;
  tableId: string | null;
};
export type GetV3ResponsesByFormResponseIdFilesAndFileIdApiResponse =
  /** status 200 Found */ GetUrlResponse;
export type GetV3ResponsesByFormResponseIdFilesAndFileIdApiArg = {
  formResponseId: string | null;
  fileId: string | null;
};
export type GetV3ResponsesFormsByFormIdApiResponse =
  /** status 200 Get a page of form responses */ PageResponse3CFormResponseResponse3E;
export type GetV3ResponsesFormsByFormIdApiArg = {
  formId: string | null;
  page?: number;
  pageSize?: number;
};
export type GetV3FormsByFormIdApiResponse =
  | /** status 200 Found */ ({
      formType: "initial";
    } & InitialFormResponse)
  | ({
      formType: "additional";
    } & AdditionalFormResponse)
  | ({
      formType: "reference";
    } & ReferenceFormResponse)
  | ({
      formType: "review";
    } & ReviewFormResponse)
  | ({
      formType: "eligibility";
    } & EligibilityFormResponse)
  | ({
      formType: "internal";
    } & InternalFormResponse);
export type GetV3FormsByFormIdApiArg = {
  formId: string | null;
};
export type PutV3FormsByFormIdApiResponse =
  | /** status 201 Updated */ ({
      formType: "initial";
    } & InitialFormResponse)
  | ({
      formType: "additional";
    } & AdditionalFormResponse)
  | ({
      formType: "reference";
    } & ReferenceFormResponse)
  | ({
      formType: "review";
    } & ReviewFormResponse)
  | ({
      formType: "eligibility";
    } & EligibilityFormResponse)
  | ({
      formType: "internal";
    } & InternalFormResponse);
export type PutV3FormsByFormIdApiArg = {
  formId: string | null;
  body:
    | (
        | ({
            formType: "initial";
          } & UpdateInitialFormRequest)
        | ({
            formType: "additional";
          } & UpdateAdditionalFormRequest)
        | ({
            formType: "reference";
          } & UpdateReferenceFormRequest)
        | ({
            formType: "review";
          } & UpdateReviewFormRequest)
        | ({
            formType: "internal";
          } & UpdateInternalFormRequest)
        | ({
            formType: "eligibility";
          } & UpdateEligibilityFormRequest)
      )
    | null;
};
export type DeleteV3FormsByFormIdApiResponse =
  /** status 204 Deleted */ undefined;
export type DeleteV3FormsByFormIdApiArg = {
  formId: string | null;
};
export type GetV3FormsApiResponse =
  /** status 200 Found */ PageResponse3CFormResponse3E;
export type GetV3FormsApiArg = {
  type?:
    | (
        | "additional"
        | "initial"
        | "reference"
        | "review"
        | "internal"
        | "eligibility"
      )
    | null;
  projectId?: string | null;
  page?: number;
  pageSize?: number;
};
export type PostV3FormsApiResponse =
  | /** status 201 Created form */ ({
      formType: "initial";
    } & InitialFormResponse)
  | ({
      formType: "additional";
    } & AdditionalFormResponse)
  | ({
      formType: "reference";
    } & ReferenceFormResponse)
  | ({
      formType: "review";
    } & ReviewFormResponse)
  | ({
      formType: "eligibility";
    } & EligibilityFormResponse)
  | ({
      formType: "internal";
    } & InternalFormResponse);
export type PostV3FormsApiArg = {
  createFormRequest: CreateFormRequest;
};
export type PutV3ReviewsApiResponse =
  /** status 201 Updated */ ReviewResponseResponse;
export type PutV3ReviewsApiArg = {
  updateReviewScoreRequest: UpdateReviewScoreRequest;
};
export type DeleteV3ReviewsByReviewResponseIdApiResponse =
  /** status 204 Successfully deleted review */ undefined;
export type DeleteV3ReviewsByReviewResponseIdApiArg = {
  reviewResponseId: string | null;
};
export type PostV3FundsApiResponse =
  /** status 201 The new fund */ FundResponse;
export type PostV3FundsApiArg = {
  createFundRequest: CreateFundRequest;
};
export type GetV3FundsApiResponse =
  /** status 200 Page of funds */ PageResponse3CFundResponse3E;
export type GetV3FundsApiArg = {
  page?: number;
  pageSize?: number;
};
export type GetV3FundsByFundIdApiResponse =
  /** status 200 The fund */ FundResponse;
export type GetV3FundsByFundIdApiArg = {
  fundId: string | null;
};
export type PutV3FundsByFundIdApiResponse =
  /** status 200 The fund */ FundResponse;
export type PutV3FundsByFundIdApiArg = {
  fundId: string | null;
  updateFundRequest: UpdateFundRequest;
};
export type DeleteV3FundsByFundIdApiResponse =
  /** status 204 Fund deleted. */ undefined;
export type DeleteV3FundsByFundIdApiArg = {
  fundId: string | null;
};
export type PostV3TransactionsApiResponse =
  /** status 201 The new transaction */ TransactionResponse;
export type PostV3TransactionsApiArg = {
  body: (CreateAwardedTransactionRequest | CreatePaidTransactionRequest) | null;
};
export type GetV3TransactionsApiResponse =
  /** status 200 Page of transactions */ TransactionResponse;
export type GetV3TransactionsApiArg = {
  page?: number;
  pageSize?: number;
  fundId?: string | null;
  status?: ("awarded" | "paid" | "processing") | null;
  startDate?: string | null;
  endDate?: string | null;
  submitterId?: string | null;
  submissionId?: number | null;
};
export type GetV3TransactionsByTransactionIdApiResponse =
  /** status 200 Found transaction by id */ TransactionResponse;
export type GetV3TransactionsByTransactionIdApiArg = {
  transactionId: string | null;
};
export type PutV3TransactionsByTransactionIdApiResponse =
  /** status 200 Successfully updated transaction */ TransactionResponse;
export type PutV3TransactionsByTransactionIdApiArg = {
  transactionId: string | null;
  updateTransactionRequest: UpdateTransactionRequest;
};
export type DeleteV3TransactionsByTransactionIdApiResponse =
  /** status 204 Successfully deleted transaction */ undefined;
export type DeleteV3TransactionsByTransactionIdApiArg = {
  transactionId: string | null;
};
export type PostV3TransactionsByTransactionIdSendApiResponse =
  /** status 200 The new processing transaction */ TransactionResponse;
export type PostV3TransactionsByTransactionIdSendApiArg = {
  transactionId: string | null;
  sendFundsRequest: SendFundsRequest;
};
export type GetV3LabelsApiResponse =
  /** status 200 Page of labels */ PageResponse3CLabelResponse3E;
export type GetV3LabelsApiArg = {
  page?: number;
  pageSize?: number;
};
export type PostV3LabelsApiResponse =
  /** status 201 The new label */ LabelResponse;
export type PostV3LabelsApiArg = {
  createLabelRequest: CreateLabelRequest;
};
export type PostV3LabelsListApiResponse =
  /** status 200 List of labels */ LabelResponse[];
export type PostV3LabelsListApiArg = {
  getLabelsRequest: GetLabelsRequest;
};
export type GetV3LabelsByLabelIdApiResponse =
  /** status 201 The label */ LabelResponse;
export type GetV3LabelsByLabelIdApiArg = {
  labelId: number | null;
};
export type PutV3LabelsByLabelIdApiResponse =
  /** status 200 The label */ LabelResponse;
export type PutV3LabelsByLabelIdApiArg = {
  labelId: number | null;
  updateLabelRequest: UpdateLabelRequest;
};
export type DeleteV3LabelsByLabelIdApiResponse =
  /** status 204 Label deleted */ undefined;
export type DeleteV3LabelsByLabelIdApiArg = {
  labelId: number | null;
};
export type GetV3OrganizationsTeamAssignmentsApiResponse =
  /** status 200 List of team members and their assignment counts */ TeamMemberAssignmentResponse[];
export type GetV3OrganizationsTeamAssignmentsApiArg = void;
export type PostV3OrganizationsTeamListApiResponse =
  /** status 200 List of team members */ TeamMemberResponse[];
export type PostV3OrganizationsTeamListApiArg = {
  getTeamMembersRequest: GetTeamMembersRequest;
};
export type GetV3OrganizationsTeamInvitesApiResponse =
  /** status 200 List of team invites */ TeamInviteResponse[];
export type GetV3OrganizationsTeamInvitesApiArg = void;
export type GetV3ProjectsApiResponse =
  /** status 200 Page of projects */ PageResponse3CProjectResponse3E;
export type GetV3ProjectsApiArg = {
  page?: number;
  pageSize?: number;
};
export type PostV3ProjectsApiResponse =
  /** status 201 The new project */ ProjectResponse;
export type PostV3ProjectsApiArg = {
  createProjectRequest: CreateProjectRequest;
};
export type GetV3ProjectsByProjectIdApiResponse =
  /** status 200 The project */ ProjectResponse;
export type GetV3ProjectsByProjectIdApiArg = {
  projectId: string | null;
};
export type PutV3ProjectsByProjectIdApiResponse =
  /** status 200 The updated project */ ProjectResponse;
export type PutV3ProjectsByProjectIdApiArg = {
  projectId: string | null;
  updateProjectRequest: UpdateProjectRequest;
};
export type PutV3ProjectsStagesByReviewStageIdApiResponse =
  /** status 200 The updated review stage */ ReviewStageResponse;
export type PutV3ProjectsStagesByReviewStageIdApiArg = {
  reviewStageId: string | null;
  updateReviewStageRequest: UpdateReviewStageRequest;
};
export type GetV3ProjectsStagesByReviewStageIdApiResponse =
  /** status 200 Found */ ReviewStageResponse;
export type GetV3ProjectsStagesByReviewStageIdApiArg = {
  reviewStageId: string | null;
};
export type DeleteV3ProjectsStagesByReviewStageIdApiResponse =
  /** status 204 Deleted review stage */ undefined;
export type DeleteV3ProjectsStagesByReviewStageIdApiArg = {
  reviewStageId: string | null;
};
export type PostV3ProjectsByProjectIdStagesApiResponse =
  /** status 201 Created */ ReviewStageResponse;
export type PostV3ProjectsByProjectIdStagesApiArg = {
  projectId: string | null;
  body:
    | (
        | ({
            reviewStageType: "custom_review";
          } & CreateCustomReviewStageRequest)
        | ({
            reviewStageType: "no_review";
          } & CreateNoReviewStageRequest)
        | ({
            reviewStageType: "yes_no_maybe";
          } & CreateYesNoMaybeStageRequest)
        | ({
            reviewStageType: "automated_review";
          } & CreateAutomatedReviewStageRequest)
      )
    | null;
};
export type PostV3SubmissionsApiResponse =
  /** status 201 Created */ SubmissionResponse;
export type PostV3SubmissionsApiArg = {
  body:
    | (
        | CreateSubmissionBySubmitterIdRequest
        | CreateSubmissionByEmailRequest
        | CreateSubmissionByNameRequest
      )
    | null;
};
export type GetV3SubmissionsApiResponse =
  /** status 200 Get a page of submissions */ PageResponse3CSubmissionListResponse3E;
export type GetV3SubmissionsApiArg = {
  page?: number;
  pageSize?: number;
  search?: string | null;
  "Projects.Include"?: string[] | null;
  "Projects.Exclude"?: string[] | null;
  "LegacyProjects.Include"?: string[] | null;
  "LegacyProjects.Exclude"?: string[] | null;
  "Statuses.Include"?:
    | (
        | "new"
        | "in_progress"
        | "accepted"
        | "declined"
        | "withdrawn"
        | "completed"
        | "editable"
        | "viewed"
        | "received"
        | "published"
      )[]
    | null;
  "Statuses.Exclude"?:
    | (
        | "new"
        | "in_progress"
        | "accepted"
        | "declined"
        | "withdrawn"
        | "completed"
        | "editable"
        | "viewed"
        | "received"
        | "published"
      )[]
    | null;
  reviewers?: string[] | null;
  archivedStatus?: ArchivedStatus;
  "Labels.IncludeAny"?: number[] | null;
  "Labels.IncludeAll"?: number[] | null;
  "Labels.IncludeUnlabeled"?: boolean | null;
  "Labels.ExcludeAny"?: number[] | null;
  "Labels.ExcludeAll"?: number[] | null;
  "Labels.ExcludeUnlabeled"?: boolean | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  additionalFormStatuses?: AdditionalFormsStatus[] | null;
  reviewStatus?: ReviewStatus;
  "ReviewStages.Include"?: string[] | null;
  "ReviewStages.Exclude"?: string[] | null;
  "SortBy.Field"?: SubmissionSortField;
  "SortBy.Order"?: SubmissionSortOrder;
};
export type GetV3SubmissionsBySubmissionIdApiResponse =
  /** status 200 Found */ SubmissionResponse;
export type GetV3SubmissionsBySubmissionIdApiArg = {
  submissionId: number | null;
};
export type DeleteV3SubmissionsBySubmissionIdApiResponse =
  /** status 204 Deleted */ undefined;
export type DeleteV3SubmissionsBySubmissionIdApiArg = {
  submissionId: number | null;
};
export type PutV3SubmissionsBySubmissionIdStageAndStageIdApiResponse =
  /** status 200 Move submission between review stages */ PageResponse3CSubmissionResponse3E;
export type PutV3SubmissionsBySubmissionIdStageAndStageIdApiArg = {
  submissionId: number | null;
  stageId: string | null;
};
export type GetV3SubmissionsHistoryApiResponse =
  /** status 200 Page of submission history items */ PageResponse3CSubmissionHistoryResponse3E;
export type GetV3SubmissionsHistoryApiArg = {
  submissionId?: number[] | null;
  userId?: string[] | null;
  historyTypeId?: number[] | null;
  bulkActionTaskId?: string | null;
  page?: number;
  pageSize?: number;
};
export type PostV3SubmissionsAssignmentsListApiResponse =
  /** status 200 Success */ ListSubmissionAssignmentsResponse;
export type PostV3SubmissionsAssignmentsListApiArg = {
  submissionIdsBaseRequest: SubmissionIdsBaseRequest;
};
export type GetV3SubmissionsBySubmissionIdReviewsApiResponse =
  /** status 200 Return a list of reviews for a submission */ ReviewResponseResponse[];
export type GetV3SubmissionsBySubmissionIdReviewsApiArg = {
  submissionId: number | null;
  reviewStageId?: string | null;
};
export type PutV3SubmissionsBySubmissionIdLabelsAndLabelIdApiResponse =
  /** status 204 Label applied to submission */ undefined;
export type PutV3SubmissionsBySubmissionIdLabelsAndLabelIdApiArg = {
  submissionId: number | null;
  labelId: number | null;
};
export type DeleteV3SubmissionsBySubmissionIdLabelsAndLabelIdApiResponse =
  /** status 204 Label removed from submission */ undefined;
export type DeleteV3SubmissionsBySubmissionIdLabelsAndLabelIdApiArg = {
  submissionId: number | null;
  labelId: number | null;
};
export type PutV3SubmissionsBySubmissionIdStatusApiResponse =
  /** status 204 Submission status updated */ undefined;
export type PutV3SubmissionsBySubmissionIdStatusApiArg = {
  submissionId: number | null;
  body:
    | (
        | ({
            status: "accepted";
          } & UpdateSubmissionStatusAcceptedRequest)
        | ({
            status: "in_progress";
          } & UpdateSubmissionStatusInProgressRequest)
        | ({
            status: "declined";
          } & UpdateSubmissionStatusDeclinedRequest)
        | ({
            status: "withdrawn";
          } & UpdateSubmissionStatusWithdrawnRequest)
        | ({
            status: "completed";
          } & UpdateSubmissionStatusCompletedRequest)
      )
    | null;
};
export type PutV3SubmissionsBySubmissionIdArchiveApiResponse =
  /** status 204 Submission archived */ undefined;
export type PutV3SubmissionsBySubmissionIdArchiveApiArg = {
  submissionId: number | null;
};
export type PutV3SubmissionsBySubmissionIdUnarchiveApiResponse =
  /** status 204 Submission unarchived */ undefined;
export type PutV3SubmissionsBySubmissionIdUnarchiveApiArg = {
  submissionId: number | null;
};
export type PostV3SubmissionsBySubmissionIdNotesApiResponse =
  /** status 204 Note added to submission */ undefined;
export type PostV3SubmissionsBySubmissionIdNotesApiArg = {
  submissionId: number | null;
  addNoteToSubmissionRequest: AddNoteToSubmissionRequest;
};
export type FormRequestResponse = {
  formType:
    | (
        | "additional"
        | "initial"
        | "reference"
        | "review"
        | "internal"
        | "eligibility"
      )
    | null;
  requestId?: string | null;
  status?: string | null;
  isRescinded?: boolean;
  rescindedAt?: string | null;
  isCompleted?: boolean;
  completedAt?: string | null;
  createdAt?: string | null;
};
export type InternalFormRequestResponse = FormRequestResponse;
export type AdditionalFormRequestResponse = FormRequestResponse;
export type ReviewFormRequestResponse = FormRequestResponse;
export type FieldError = {
  name?: string | null;
  errors?: string[] | null;
};
export type BadRequestResponse = {
  messages?: string[] | null;
  fields?: FieldError[] | null;
};
export type CreateFormRequestRequest = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  submissionId: number;
};
export type CreateReviewFormRequestRequest = CreateFormRequestRequest;
export type CreateInternalFormRequestRequest = CreateFormRequestRequest;
export type PublicMessageRequest = {
  subject?: string | null;
  body?: string | null;
};
export type CreateAdditionalFormRequestRequest = {
  submissionId: number;
  additionalFormId: string;
  message?: PublicMessageRequest;
};
export type FieldResponseResponse = {
  fieldType: string;
  formFieldId: string;
};
export type TitleFieldResponseResponse = FieldResponseResponse;
export type NameFieldResponseResponse = FieldResponseResponse;
export type AddressFieldResponseResponse = FieldResponseResponse;
export type ShortAnswerFieldResponseResponse = FieldResponseResponse;
export type LongAnswerFieldResponseResponse = FieldResponseResponse;
export type SingleCheckboxFieldResponseResponse = FieldResponseResponse;
export type MultipleResponseFieldResponseResponse = FieldResponseResponse;
export type SingleResponseFieldResponseResponse = FieldResponseResponse;
export type FileUploadFieldResponseResponse = FieldResponseResponse;
export type TableFieldResponseResponse = FieldResponseResponse;
export type NumberFieldResponseResponse = FieldResponseResponse;
export type DateFieldResponseResponse = FieldResponseResponse;
export type EmailFieldResponseResponse = FieldResponseResponse;
export type WebsiteFieldResponseResponse = FieldResponseResponse;
export type PhoneFieldResponseResponse = FieldResponseResponse;
export type CoverLetterFieldResponseResponse = FieldResponseResponse;
export type TextOnlyFieldResponseResponse = FieldResponseResponse;
export type ReferenceFormFieldResponseResponse = FieldResponseResponse;
export type DividerFieldResponseResponse = FieldResponseResponse;
export type SingleRatingFieldResponseResponse = FieldResponseResponse;
export type MultipleRatingFieldResponseResponse = FieldResponseResponse;
export type DropdownRatingFieldResponseResponse = FieldResponseResponse;
export type CharityCheckFieldResponseResponse = FieldResponseResponse;
export type EligibilityCharityCheckFieldResponseResponse =
  FieldResponseResponse;
export type EligibilitySingleCheckboxFieldResponseResponse =
  FieldResponseResponse;
export type EligibilitySingleResponseFieldResponseResponse =
  FieldResponseResponse;
export type EligibilityDropdownListFieldResponseResponse =
  FieldResponseResponse;
export type BankDetailsFieldResponseResponse = FieldResponseResponse;
export type FormResponseResponse = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  formResponseId?: string;
  formId?: string;
  fieldData?: (
    | ({
        fieldType: "TITLE";
      } & TitleFieldResponseResponse)
    | ({
        fieldType: "NAME";
      } & NameFieldResponseResponse)
    | ({
        fieldType: "ADDRESS";
      } & AddressFieldResponseResponse)
    | ({
        fieldType: "SHORT_ANSWER";
      } & ShortAnswerFieldResponseResponse)
    | ({
        fieldType: "LONG_ANSWER";
      } & LongAnswerFieldResponseResponse)
    | ({
        fieldType: "SINGLE_CHECKBOX";
      } & SingleCheckboxFieldResponseResponse)
    | ({
        fieldType: "MULTIPLE_RESPONSE";
      } & MultipleResponseFieldResponseResponse)
    | ({
        fieldType: "SINGLE_RESPONSE";
      } & SingleResponseFieldResponseResponse)
    | ({
        fieldType: "FILE_UPLOAD";
      } & FileUploadFieldResponseResponse)
    | ({
        fieldType: "TABLE";
      } & TableFieldResponseResponse)
    | ({
        fieldType: "NUMBER";
      } & NumberFieldResponseResponse)
    | ({
        fieldType: "DATE";
      } & DateFieldResponseResponse)
    | ({
        fieldType: "EMAIL";
      } & EmailFieldResponseResponse)
    | ({
        fieldType: "WEBSITE";
      } & WebsiteFieldResponseResponse)
    | ({
        fieldType: "PHONE";
      } & PhoneFieldResponseResponse)
    | ({
        fieldType: "COVER_LETTER";
      } & CoverLetterFieldResponseResponse)
    | ({
        fieldType: "TEXT_ONLY";
      } & TextOnlyFieldResponseResponse)
    | ({
        fieldType: "REFERENCE_FORM";
      } & ReferenceFormFieldResponseResponse)
    | ({
        fieldType: "DIVIDER";
      } & DividerFieldResponseResponse)
    | ({
        fieldType: "SINGLE_RATING";
      } & SingleRatingFieldResponseResponse)
    | ({
        fieldType: "MULTIPLE_RATING";
      } & MultipleRatingFieldResponseResponse)
    | ({
        fieldType: "DROPDOWN_RATING";
      } & DropdownRatingFieldResponseResponse)
    | ({
        fieldType: "CHARITY_CHECK";
      } & CharityCheckFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_CHARITY_CHECK";
      } & EligibilityCharityCheckFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_SINGLE_CHECKBOX";
      } & EligibilitySingleCheckboxFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_SINGLE_RESPONSE";
      } & EligibilitySingleResponseFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_DROPDOWN_LIST";
      } & EligibilityDropdownListFieldResponseResponse)
    | ({
        fieldType: "BANK_DETAILS";
      } & BankDetailsFieldResponseResponse)
  )[];
  createdBy?: string;
  createdAt?: string;
  isCompleted?: boolean;
  completedAt?: string | null;
  isDeleted?: boolean;
  deletedAt?: string | null;
};
export type InitialFormResponseResponse = FormResponseResponse;
export type AdditionalFormResponseResponse = FormResponseResponse;
export type ReferenceFormResponseResponse = FormResponseResponse;
export type ReviewFormResponseResponse = FormResponseResponse;
export type EligibilityFormResponseResponse = FormResponseResponse;
export type InternalFormResponseResponse = FormResponseResponse;
export type CreateFormResponseRequest = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  requestId: string;
  fieldData?:
    | (
        | ({
            fieldType: "TITLE";
          } & TitleFieldResponseResponse)
        | ({
            fieldType: "NAME";
          } & NameFieldResponseResponse)
        | ({
            fieldType: "ADDRESS";
          } & AddressFieldResponseResponse)
        | ({
            fieldType: "SHORT_ANSWER";
          } & ShortAnswerFieldResponseResponse)
        | ({
            fieldType: "LONG_ANSWER";
          } & LongAnswerFieldResponseResponse)
        | ({
            fieldType: "SINGLE_CHECKBOX";
          } & SingleCheckboxFieldResponseResponse)
        | ({
            fieldType: "MULTIPLE_RESPONSE";
          } & MultipleResponseFieldResponseResponse)
        | ({
            fieldType: "SINGLE_RESPONSE";
          } & SingleResponseFieldResponseResponse)
        | ({
            fieldType: "FILE_UPLOAD";
          } & FileUploadFieldResponseResponse)
        | ({
            fieldType: "TABLE";
          } & TableFieldResponseResponse)
        | ({
            fieldType: "NUMBER";
          } & NumberFieldResponseResponse)
        | ({
            fieldType: "DATE";
          } & DateFieldResponseResponse)
        | ({
            fieldType: "EMAIL";
          } & EmailFieldResponseResponse)
        | ({
            fieldType: "WEBSITE";
          } & WebsiteFieldResponseResponse)
        | ({
            fieldType: "PHONE";
          } & PhoneFieldResponseResponse)
        | ({
            fieldType: "COVER_LETTER";
          } & CoverLetterFieldResponseResponse)
        | ({
            fieldType: "TEXT_ONLY";
          } & TextOnlyFieldResponseResponse)
        | ({
            fieldType: "REFERENCE_FORM";
          } & ReferenceFormFieldResponseResponse)
        | ({
            fieldType: "DIVIDER";
          } & DividerFieldResponseResponse)
        | ({
            fieldType: "SINGLE_RATING";
          } & SingleRatingFieldResponseResponse)
        | ({
            fieldType: "MULTIPLE_RATING";
          } & MultipleRatingFieldResponseResponse)
        | ({
            fieldType: "DROPDOWN_RATING";
          } & DropdownRatingFieldResponseResponse)
        | ({
            fieldType: "CHARITY_CHECK";
          } & CharityCheckFieldResponseResponse)
        | ({
            fieldType: "ELIGIBILITY_CHARITY_CHECK";
          } & EligibilityCharityCheckFieldResponseResponse)
        | ({
            fieldType: "ELIGIBILITY_SINGLE_CHECKBOX";
          } & EligibilitySingleCheckboxFieldResponseResponse)
        | ({
            fieldType: "ELIGIBILITY_SINGLE_RESPONSE";
          } & EligibilitySingleResponseFieldResponseResponse)
        | ({
            fieldType: "ELIGIBILITY_DROPDOWN_LIST";
          } & EligibilityDropdownListFieldResponseResponse)
        | ({
            fieldType: "BANK_DETAILS";
          } & BankDetailsFieldResponseResponse)
      )[]
    | null;
};
export type CreateInternalFormResponseRequest = CreateFormResponseRequest;
export type UpdateFormResponseRequest = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  fieldData: (
    | ({
        fieldType: "TITLE";
      } & TitleFieldResponseResponse)
    | ({
        fieldType: "NAME";
      } & NameFieldResponseResponse)
    | ({
        fieldType: "ADDRESS";
      } & AddressFieldResponseResponse)
    | ({
        fieldType: "SHORT_ANSWER";
      } & ShortAnswerFieldResponseResponse)
    | ({
        fieldType: "LONG_ANSWER";
      } & LongAnswerFieldResponseResponse)
    | ({
        fieldType: "SINGLE_CHECKBOX";
      } & SingleCheckboxFieldResponseResponse)
    | ({
        fieldType: "MULTIPLE_RESPONSE";
      } & MultipleResponseFieldResponseResponse)
    | ({
        fieldType: "SINGLE_RESPONSE";
      } & SingleResponseFieldResponseResponse)
    | ({
        fieldType: "FILE_UPLOAD";
      } & FileUploadFieldResponseResponse)
    | ({
        fieldType: "TABLE";
      } & TableFieldResponseResponse)
    | ({
        fieldType: "NUMBER";
      } & NumberFieldResponseResponse)
    | ({
        fieldType: "DATE";
      } & DateFieldResponseResponse)
    | ({
        fieldType: "EMAIL";
      } & EmailFieldResponseResponse)
    | ({
        fieldType: "WEBSITE";
      } & WebsiteFieldResponseResponse)
    | ({
        fieldType: "PHONE";
      } & PhoneFieldResponseResponse)
    | ({
        fieldType: "COVER_LETTER";
      } & CoverLetterFieldResponseResponse)
    | ({
        fieldType: "TEXT_ONLY";
      } & TextOnlyFieldResponseResponse)
    | ({
        fieldType: "REFERENCE_FORM";
      } & ReferenceFormFieldResponseResponse)
    | ({
        fieldType: "DIVIDER";
      } & DividerFieldResponseResponse)
    | ({
        fieldType: "SINGLE_RATING";
      } & SingleRatingFieldResponseResponse)
    | ({
        fieldType: "MULTIPLE_RATING";
      } & MultipleRatingFieldResponseResponse)
    | ({
        fieldType: "DROPDOWN_RATING";
      } & DropdownRatingFieldResponseResponse)
    | ({
        fieldType: "CHARITY_CHECK";
      } & CharityCheckFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_CHARITY_CHECK";
      } & EligibilityCharityCheckFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_SINGLE_CHECKBOX";
      } & EligibilitySingleCheckboxFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_SINGLE_RESPONSE";
      } & EligibilitySingleResponseFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_DROPDOWN_LIST";
      } & EligibilityDropdownListFieldResponseResponse)
    | ({
        fieldType: "BANK_DETAILS";
      } & BankDetailsFieldResponseResponse)
  )[];
};
export type UpdateInternalFormResponseRequest = UpdateFormResponseRequest;
export type GetUrlResponse = {
  url?: string;
};
export type PageResponse3CFormResponseResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?:
    | (
        | ({
            formType: "initial";
          } & InitialFormResponseResponse)
        | ({
            formType: "additional";
          } & AdditionalFormResponseResponse)
        | ({
            formType: "reference";
          } & ReferenceFormResponseResponse)
        | ({
            formType: "review";
          } & ReviewFormResponseResponse)
        | ({
            formType: "eligibility";
          } & EligibilityFormResponseResponse)
        | ({
            formType: "internal";
          } & InternalFormResponseResponse)
      )[]
    | null;
};
export type ApiOptionResponse = {
  formOptionId?: string | null;
  label?: string | null;
  branchId?: string | null;
  score?: number | null;
  customAutoLabel?: string | null;
  price?: number | null;
  isEligible?: boolean | null;
};
export type ApiMetadataResponse = {
  formMetadataId?: string | null;
  label?: string | null;
};
export type ApiFieldResponse = {
  formFieldId?: string | null;
  fieldType?: string | null;
  label?: string | null;
  minValue?: string | null;
  maxValue?: string | null;
  format?: string | null;
  currency?: string | null;
  defaultCountry?: string | null;
  requireValidUSAddress?: boolean;
  referenceFormId?: string | null;
  orgMessage?: string | null;
  showOrgMessage?: boolean;
  countLimit?: number | null;
  countType?: string | null;
  allowRichTextEditing?: boolean;
  additionalInstructions?: string | null;
  isRequired?: boolean;
  isInternal?: boolean;
  isEditable?: boolean | null;
  autoLabel?: boolean;
  isCustomAutoLabel?: boolean;
  customAutoLabel?: string | null;
  isBlind?: boolean;
  inline?: boolean;
  enableBranching?: boolean;
  enablePayment?: boolean;
  price?: number | null;
  branchId?: string | null;
  options?: ApiOptionResponse[] | null;
  fileTypes?: string[] | null;
  fileLimit?: number;
  metadata?: ApiMetadataResponse[] | null;
  tableId?: string | null;
  tableIsReadonly?: boolean;
  tableFileName?: string | null;
  textBlock?: string | null;
  computeTableUrl?: string | null;
  duplicateTableTemplateUrl?: string | null;
  createFileUrl?: string | null;
  createLargeFileUrl?: string | null;
  shareFeedback?: boolean;
  eligibleSubsections?: string[] | null;
  isEligibleValue?: boolean;
  specialValidation?: number;
  hasRoutingNumber?: boolean;
  hasAccountNumber?: boolean;
};
export type ApiBranchResponse = {
  formBranchId?: string | null;
  label?: string | null;
  color?: string | null;
};
export type FormResponse = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  formId?: string | null;
  name?: string;
  fields?: ApiFieldResponse[];
  branches?: ApiBranchResponse[];
  createdBy?: string;
  createdAt?: string;
};
export type InitialFormResponse = FormResponse;
export type AdditionalFormResponse = FormResponse;
export type ReferenceFormResponse = FormResponse;
export type ReviewFormResponse = FormResponse;
export type EligibilityFormResponse = FormResponse;
export type InternalFormResponse = FormResponse;
export type FieldRequest = {
  fieldType: string;
  formFieldId?: string | null;
  label?: string | null;
  additionalInstructions?: string | null;
  isRequired?: boolean;
  branchId?: string | null;
  shareFeedback?: boolean;
};
export type TitleFieldRequest = FieldRequest;
export type NameFieldRequest = FieldRequest;
export type AddressFieldRequest = FieldRequest;
export type ShortAnswerFieldRequest = FieldRequest;
export type LongAnswerFieldRequest = FieldRequest;
export type SingleCheckboxFieldRequest = FieldRequest;
export type MultipleResponseFieldRequest = FieldRequest;
export type SingleResponseFieldRequest = FieldRequest;
export type FileUploadFieldRequest = FieldRequest;
export type TableFieldRequest = FieldRequest;
export type NumberFieldRequest = FieldRequest;
export type DateFieldRequest = FieldRequest;
export type EmailFieldRequest = FieldRequest;
export type WebsiteFieldRequest = FieldRequest;
export type PhoneFieldRequest = FieldRequest;
export type CoverLetterFieldRequest = FieldRequest;
export type TextOnlyFieldRequest = FieldRequest;
export type ReferenceFormFieldRequest = FieldRequest;
export type DividerFieldRequest = FieldRequest;
export type SingleRatingFieldRequest = FieldRequest;
export type MultipleRatingFieldRequest = FieldRequest;
export type DropdownRatingFieldRequest = FieldRequest;
export type DropdownListFieldRequest = FieldRequest;
export type CharityCheckFieldRequest = FieldRequest;
export type EligibilityCharityCheckFieldRequest = FieldRequest;
export type EligibilitySingleCheckboxFieldRequest = FieldRequest;
export type EligibilitySingleResponseFieldRequest = FieldRequest;
export type EligibilityDropdownListFieldRequest = FieldRequest;
export type BankDetailsFieldRequest = FieldRequest;
export type BranchRequest = {
  branchId: string;
  label: string;
  color: string;
};
export type UpdateFormRequest = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  name: string;
  fields?:
    | (
        | ({
            fieldType: "title";
          } & TitleFieldRequest)
        | ({
            fieldType: "name";
          } & NameFieldRequest)
        | ({
            fieldType: "address";
          } & AddressFieldRequest)
        | ({
            fieldType: "short_answer";
          } & ShortAnswerFieldRequest)
        | ({
            fieldType: "long_answer";
          } & LongAnswerFieldRequest)
        | ({
            fieldType: "single_checkbox";
          } & SingleCheckboxFieldRequest)
        | ({
            fieldType: "multiple_response";
          } & MultipleResponseFieldRequest)
        | ({
            fieldType: "single_response";
          } & SingleResponseFieldRequest)
        | ({
            fieldType: "file_upload";
          } & FileUploadFieldRequest)
        | ({
            fieldType: "table";
          } & TableFieldRequest)
        | ({
            fieldType: "number";
          } & NumberFieldRequest)
        | ({
            fieldType: "date";
          } & DateFieldRequest)
        | ({
            fieldType: "email";
          } & EmailFieldRequest)
        | ({
            fieldType: "website";
          } & WebsiteFieldRequest)
        | ({
            fieldType: "phone";
          } & PhoneFieldRequest)
        | ({
            fieldType: "cover_letter";
          } & CoverLetterFieldRequest)
        | ({
            fieldType: "text_only";
          } & TextOnlyFieldRequest)
        | ({
            fieldType: "reference_form";
          } & ReferenceFormFieldRequest)
        | ({
            fieldType: "divider";
          } & DividerFieldRequest)
        | ({
            fieldType: "single_rating";
          } & SingleRatingFieldRequest)
        | ({
            fieldType: "multiple_rating";
          } & MultipleRatingFieldRequest)
        | ({
            fieldType: "dropdown_rating";
          } & DropdownRatingFieldRequest)
        | ({
            fieldType: "dropdown_list";
          } & DropdownListFieldRequest)
        | ({
            fieldType: "charity_check";
          } & CharityCheckFieldRequest)
        | ({
            fieldType: "eligibility_charity_check";
          } & EligibilityCharityCheckFieldRequest)
        | ({
            fieldType: "eligibility_single_checkbox";
          } & EligibilitySingleCheckboxFieldRequest)
        | ({
            fieldType: "eligibility_single_response";
          } & EligibilitySingleResponseFieldRequest)
        | ({
            fieldType: "eligibility_dropdown_list";
          } & EligibilityDropdownListFieldRequest)
        | ({
            fieldType: "bank_details";
          } & BankDetailsFieldRequest)
      )[]
    | null;
  branches?: BranchRequest[] | null;
};
export type UpdateInitialFormRequest = UpdateFormRequest;
export type UpdateAdditionalFormRequest = UpdateFormRequest;
export type UpdateReferenceFormRequest = UpdateFormRequest;
export type UpdateReviewFormRequest = UpdateFormRequest;
export type UpdateInternalFormRequest = UpdateFormRequest;
export type UpdateEligibilityFormRequest = UpdateFormRequest;
export type PageResponse3CFormResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?:
    | (
        | ({
            formType: "initial";
          } & InitialFormResponse)
        | ({
            formType: "additional";
          } & AdditionalFormResponse)
        | ({
            formType: "reference";
          } & ReferenceFormResponse)
        | ({
            formType: "review";
          } & ReviewFormResponse)
        | ({
            formType: "eligibility";
          } & EligibilityFormResponse)
        | ({
            formType: "internal";
          } & InternalFormResponse)
      )[]
    | null;
};
export type CreateFormRequest = {
  formType:
    | "additional"
    | "initial"
    | "reference"
    | "review"
    | "internal"
    | "eligibility";
  name?: string;
};
export type ReviewResponseResponse = {
  reviewResponseId?: string | null;
  submissionId?: number | null;
  reviewStageId?: string | null;
  formResponseId?: string | null;
  reviewerId?: string | null;
  score?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  isDeleted?: boolean;
  deletedAt?: string | null;
  isCompleted?: boolean;
  completedAt?: string | null;
  isAssigned?: boolean;
  isOpenForEditing?: boolean;
};
export type UpdateReviewScoreRequest = {
  submissionId: number;
  reviewStageId: string;
  score: number;
};
export type FundResponse = {
  fundId?: string;
  fundName?: string;
  totalAmount?: number;
  awardedAmount?: number;
  paidAmount?: number;
  availableAmount?: number;
  description?: string | null;
  createdBy?: string;
  createdAt?: string;
};
export type CreateFundRequest = {
  name: string;
  amount: number;
  description?: string | null;
};
export type PageResponse3CFundResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?: FundResponse[] | null;
};
export type UpdateFundRequest = {
  name: string;
  amount: number;
  description?: string | null;
};
export type TransactionResponse = {
  transactionId?: string;
  amount?: number;
  fundId?: string;
  status?: "awarded" | "paid" | "processing";
  submissionId?: number;
  createdAt?: string;
  description?: string;
  awardTransactionId?: string | null;
};
export type CreateTransactionRequest = {
  amount: number;
  description?: string | null;
  fundId: string;
  transactionStatus: "awarded" | "paid" | "processing";
};
export type CreateAwardedTransactionRequest = CreateTransactionRequest;
export type CreatePaidTransactionRequest = CreateTransactionRequest;
export type UpdateTransactionRequest = {
  amount: number;
  description?: string | null;
};
export type FileRequest = {
  fileId: string;
};
export type CreateSubmissionMessageRequest = {
  subject: string;
  body: string;
  files?: FileRequest[] | null;
  shouldIncludeRequestAgreement?: boolean;
  shouldUseOrganizationEmailAsFromAddress?: boolean;
};
export type SendFundsRequest = {
  message?: CreateSubmissionMessageRequest;
};
export type LabelResponse = {
  labelId?: number;
  name?: string;
  backgroundColor?: string;
  foregroundColor?: string | null;
};
export type PageResponse3CLabelResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?: LabelResponse[] | null;
};
export type CreateLabelRequest = {
  name: string;
};
export type GetLabelsRequest = {
  labelIds: number[];
};
export type UpdateLabelRequest = {
  name: string;
};
export type Name = {
  first?: string | null;
  last?: string | null;
  full?: string | null;
};
export type TeamMemberAssignmentResponse = {
  userId?: string;
  email?: string | null;
  title?: string | null;
  name?: Name;
  permissionLevel?:
    | "None"
    | "Level1"
    | "Level2"
    | "Level3"
    | "Level4"
    | "Level5";
  enabled?: boolean;
  assignmentCount?: number;
};
export type TeamMemberResponse = {
  userId?: string;
  email?: string;
  title?: string | null;
  name?: Name;
  permissionLevel?:
    | "None"
    | "Level1"
    | "Level2"
    | "Level3"
    | "Level4"
    | "Level5";
};
export type GetTeamMembersRequest = {
  userIds?: string[] | null;
};
export type TeamInviteResponse = {
  teamInviteId?: number;
  code?: string | null;
  inviteDate?: string;
  email?: string | null;
  title?: string | null;
  permissionLevel?:
    | "None"
    | "Level1"
    | "Level2"
    | "Level3"
    | "Level4"
    | "Level5";
};
export type ReviewStageResponse = {
  reviewStageId?: string;
  stageName?: string;
  stageOrder?: number;
  type?: "no_review" | "yes_no_maybe" | "custom_review" | "automated_review";
  formId?: string | null;
  reviewerUserIds?: string[] | null;
  isDeleted?: boolean;
};
export type ProjectResponse = {
  projectId?: string;
  name?: string;
  guidelinesHtml?: string | null;
  termsOfUse?: string | null;
  initialFormId?: string;
  internalFormId?: string | null;
  eligibilityFormId?: string | null;
  startsAt?: string | null;
  endsAt?: string | null;
  startsAtUtc?: string | null;
  endsAtUtc?: string | null;
  isHidden?: boolean;
  isLive?: boolean;
  isArchived?: boolean;
  shouldHideBlindFields?: boolean;
  blindLevel?:
    | ("None" | "Level1" | "Level2" | "Level3" | "Level4" | "Level5")
    | null;
  createdByUserId?: string;
  createdAt?: string;
  reviewStages?: ReviewStageResponse[] | null;
};
export type PageResponse3CProjectResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?: ProjectResponse[] | null;
};
export type CreateProjectRequest = {
  name: string;
  guidelinesHtml?: string | null;
  termsOfUse?: string | null;
  eligibilityFormId?: string | null;
  initialFormId: string;
  internalFormId?: string | null;
  startsAt?: string | null;
  endsAt?: string | null;
  isHidden?: boolean;
  isLive?: boolean;
  isArchived?: boolean;
  shouldHideBlindFields?: boolean;
  blindLevel?:
    | ("None" | "Level1" | "Level2" | "Level3" | "Level4" | "Level5")
    | null;
};
export type UpdateProjectRequest = {
  name: string;
  guidelinesHtml?: string | null;
  termsOfUse?: string | null;
  eligibilityFormId?: string | null;
  initialFormId: string;
  internalFormId?: string | null;
  startsAt?: string | null;
  endsAt?: string | null;
  isHidden?: boolean;
  isLive?: boolean;
  isArchived?: boolean;
  shouldHideBlindFields?: boolean;
  blindLevel?:
    | ("None" | "Level1" | "Level2" | "Level3" | "Level4" | "Level5")
    | null;
};
export type UpdateReviewStageRequest = {
  stageName?: string | null;
  reviewerUserIds?: string[] | null;
  nextStageOnCompletedReviews?: string | null;
};
export type CreateReviewStageRequest = {
  reviewStageType:
    | "no_review"
    | "yes_no_maybe"
    | "custom_review"
    | "automated_review";
  stageName: string;
};
export type CreateCustomReviewStageRequest = CreateReviewStageRequest;
export type CreateNoReviewStageRequest = CreateReviewStageRequest;
export type CreateYesNoMaybeStageRequest = CreateReviewStageRequest;
export type CreateAutomatedReviewStageRequest = CreateReviewStageRequest;
export type SubmissionResponse = {
  submissionId?: number;
  projectId?: string;
  submitterId?: string;
  submitterFirstName?: string;
  submitterLastName?: string;
  submitterEmail?: string;
  submissionStatus?:
    | "new"
    | "in_progress"
    | "accepted"
    | "declined"
    | "withdrawn"
    | "completed"
    | "editable"
    | "viewed"
    | "received"
    | "published";
  isArchivedBySubmitter?: boolean;
  isArchivedByOrganization?: boolean;
  isPaid?: boolean;
  formResponses?: (
    | ({
        formType: "initial";
      } & InitialFormResponseResponse)
    | ({
        formType: "additional";
      } & AdditionalFormResponseResponse)
    | ({
        formType: "reference";
      } & ReferenceFormResponseResponse)
    | ({
        formType: "review";
      } & ReviewFormResponseResponse)
    | ({
        formType: "eligibility";
      } & EligibilityFormResponseResponse)
    | ({
        formType: "internal";
      } & InternalFormResponseResponse)
  )[];
  labels?: LabelResponse[];
  reviewStageId?: string;
};
export type CreateSubmissionRequest = {
  projectId: string;
  fieldData: (
    | ({
        fieldType: "TITLE";
      } & TitleFieldResponseResponse)
    | ({
        fieldType: "NAME";
      } & NameFieldResponseResponse)
    | ({
        fieldType: "ADDRESS";
      } & AddressFieldResponseResponse)
    | ({
        fieldType: "SHORT_ANSWER";
      } & ShortAnswerFieldResponseResponse)
    | ({
        fieldType: "LONG_ANSWER";
      } & LongAnswerFieldResponseResponse)
    | ({
        fieldType: "SINGLE_CHECKBOX";
      } & SingleCheckboxFieldResponseResponse)
    | ({
        fieldType: "MULTIPLE_RESPONSE";
      } & MultipleResponseFieldResponseResponse)
    | ({
        fieldType: "SINGLE_RESPONSE";
      } & SingleResponseFieldResponseResponse)
    | ({
        fieldType: "FILE_UPLOAD";
      } & FileUploadFieldResponseResponse)
    | ({
        fieldType: "TABLE";
      } & TableFieldResponseResponse)
    | ({
        fieldType: "NUMBER";
      } & NumberFieldResponseResponse)
    | ({
        fieldType: "DATE";
      } & DateFieldResponseResponse)
    | ({
        fieldType: "EMAIL";
      } & EmailFieldResponseResponse)
    | ({
        fieldType: "WEBSITE";
      } & WebsiteFieldResponseResponse)
    | ({
        fieldType: "PHONE";
      } & PhoneFieldResponseResponse)
    | ({
        fieldType: "COVER_LETTER";
      } & CoverLetterFieldResponseResponse)
    | ({
        fieldType: "TEXT_ONLY";
      } & TextOnlyFieldResponseResponse)
    | ({
        fieldType: "REFERENCE_FORM";
      } & ReferenceFormFieldResponseResponse)
    | ({
        fieldType: "DIVIDER";
      } & DividerFieldResponseResponse)
    | ({
        fieldType: "SINGLE_RATING";
      } & SingleRatingFieldResponseResponse)
    | ({
        fieldType: "MULTIPLE_RATING";
      } & MultipleRatingFieldResponseResponse)
    | ({
        fieldType: "DROPDOWN_RATING";
      } & DropdownRatingFieldResponseResponse)
    | ({
        fieldType: "CHARITY_CHECK";
      } & CharityCheckFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_CHARITY_CHECK";
      } & EligibilityCharityCheckFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_SINGLE_CHECKBOX";
      } & EligibilitySingleCheckboxFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_SINGLE_RESPONSE";
      } & EligibilitySingleResponseFieldResponseResponse)
    | ({
        fieldType: "ELIGIBILITY_DROPDOWN_LIST";
      } & EligibilityDropdownListFieldResponseResponse)
    | ({
        fieldType: "BANK_DETAILS";
      } & BankDetailsFieldResponseResponse)
  )[];
};
export type CreateSubmissionBySubmitterIdRequest = CreateSubmissionRequest;
export type CreateSubmissionByEmailRequest = CreateSubmissionRequest;
export type CreateSubmissionByNameRequest = CreateSubmissionRequest;
export type SubmissionListResponse = {
  submissionId?: number | null;
  projectId?: string | null;
  submitterId?: string | null;
  reviewStageId?: string | null;
  submissionStatus?:
    | (
        | "new"
        | "in_progress"
        | "accepted"
        | "declined"
        | "withdrawn"
        | "completed"
        | "editable"
        | "viewed"
        | "received"
        | "published"
      )
    | null;
  isArchived?: boolean;
  isPaid?: boolean;
  labels?: number[] | null;
  reviewers?: string[] | null;
  submitterFirstName?: string | null;
  submitterLastName?: string | null;
  submitterEmail?: string | null;
  submissionTitle?: string | null;
};
export type PageResponse3CSubmissionListResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?: SubmissionListResponse[] | null;
};
export type ArchivedStatus = "archived" | "notArchived" | "either";
export type AdditionalFormsStatus =
  | "anyCompleted"
  | "allCompleted"
  | "noneCompleted"
  | "anyEditable"
  | "any"
  | "none";
export type ReviewStatus = "pending" | "completed" | "pendingOrCompleted";
export type SubmissionSortField =
  | "submissionId"
  | "submissionTitle"
  | "submitterId"
  | "date";
export type SubmissionSortOrder = "ascending" | "descending";
export type PageResponse3CSubmissionResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?: SubmissionResponse[] | null;
};
export type SubmissionHistoryResponse = {
  historyTypeId?: number;
  submissionId?: number | null;
  replaceData?: string | null;
  submissionName?: string | null;
  emailRecipients?: string | null;
  activityUserId?: string | null;
  createdOnUtc?: string | null;
  bulkActionTaskId?: string;
  activityUserFirstName?: string | null;
  activityUserLastName?: string | null;
  submitterName?: string | null;
};
export type PageResponse3CSubmissionHistoryResponse3E = {
  page?: number;
  pageSize?: number;
  totalPages?: number;
  totalItems?: number;
  items?: SubmissionHistoryResponse[] | null;
};
export type ListSubmissionAssignmentsResponse = {
  assignments?: {
    [key: string]: number[];
  } | null;
};
export type SubmissionIdsBaseRequest = {
  submissionIds: number[];
};
export type UpdateSubmissionStatusRequest = {
  status:
    | "new"
    | "in_progress"
    | "accepted"
    | "declined"
    | "withdrawn"
    | "completed"
    | "editable"
    | "viewed"
    | "received"
    | "published";
  internalNote?: string | null;
  message?: CreateSubmissionMessageRequest;
};
export type UpdateSubmissionStatusAcceptedRequest =
  UpdateSubmissionStatusRequest;
export type UpdateSubmissionStatusInProgressRequest =
  UpdateSubmissionStatusRequest;
export type UpdateSubmissionStatusDeclinedRequest =
  UpdateSubmissionStatusRequest;
export type UpdateSubmissionStatusWithdrawnRequest =
  UpdateSubmissionStatusRequest;
export type UpdateSubmissionStatusCompletedRequest =
  UpdateSubmissionStatusRequest;
export type AddNoteToSubmissionRequest = {
  note: string;
  noteVisibility: "team" | "admins_only";
};
export const {
  usePostV3RequestsMutation,
  usePostV3RequestsAdditionalMutation,
  usePostV3ResponsesMutation,
  useGetV3ResponsesByFormResponseIdQuery,
  usePutV3ResponsesByFormResponseIdMutation,
  useDeleteV3ResponsesByFormResponseIdMutation,
  useGetV3ResponsesByFormResponseIdTablesAndTableIdQuery,
  useGetV3ResponsesByFormResponseIdFilesAndFileIdQuery,
  useGetV3ResponsesFormsByFormIdQuery,
  useGetV3FormsByFormIdQuery,
  usePutV3FormsByFormIdMutation,
  useDeleteV3FormsByFormIdMutation,
  useGetV3FormsQuery,
  usePostV3FormsMutation,
  usePutV3ReviewsMutation,
  useDeleteV3ReviewsByReviewResponseIdMutation,
  usePostV3FundsMutation,
  useGetV3FundsQuery,
  useGetV3FundsByFundIdQuery,
  usePutV3FundsByFundIdMutation,
  useDeleteV3FundsByFundIdMutation,
  usePostV3TransactionsMutation,
  useGetV3TransactionsQuery,
  useGetV3TransactionsByTransactionIdQuery,
  usePutV3TransactionsByTransactionIdMutation,
  useDeleteV3TransactionsByTransactionIdMutation,
  usePostV3TransactionsByTransactionIdSendMutation,
  useGetV3LabelsQuery,
  usePostV3LabelsMutation,
  usePostV3LabelsListMutation,
  useGetV3LabelsByLabelIdQuery,
  usePutV3LabelsByLabelIdMutation,
  useDeleteV3LabelsByLabelIdMutation,
  useGetV3OrganizationsTeamAssignmentsQuery,
  usePostV3OrganizationsTeamListMutation,
  useGetV3OrganizationsTeamInvitesQuery,
  useGetV3ProjectsQuery,
  usePostV3ProjectsMutation,
  useGetV3ProjectsByProjectIdQuery,
  usePutV3ProjectsByProjectIdMutation,
  usePutV3ProjectsStagesByReviewStageIdMutation,
  useGetV3ProjectsStagesByReviewStageIdQuery,
  useDeleteV3ProjectsStagesByReviewStageIdMutation,
  usePostV3ProjectsByProjectIdStagesMutation,
  usePostV3SubmissionsMutation,
  useGetV3SubmissionsQuery,
  useGetV3SubmissionsBySubmissionIdQuery,
  useDeleteV3SubmissionsBySubmissionIdMutation,
  usePutV3SubmissionsBySubmissionIdStageAndStageIdMutation,
  useGetV3SubmissionsHistoryQuery,
  usePostV3SubmissionsAssignmentsListMutation,
  useGetV3SubmissionsBySubmissionIdReviewsQuery,
  usePutV3SubmissionsBySubmissionIdLabelsAndLabelIdMutation,
  useDeleteV3SubmissionsBySubmissionIdLabelsAndLabelIdMutation,
  usePutV3SubmissionsBySubmissionIdStatusMutation,
  usePutV3SubmissionsBySubmissionIdArchiveMutation,
  usePutV3SubmissionsBySubmissionIdUnarchiveMutation,
  usePostV3SubmissionsBySubmissionIdNotesMutation,
} = api;

